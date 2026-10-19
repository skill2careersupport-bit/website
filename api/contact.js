
import { GoogleAuth } from 'google-auth-library'

const SHEETS_SCOPE =
  'https://www.googleapis.com/auth/spreadsheets'

async function getAccessToken(clientEmail, privateKey) {
  const auth = new GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n').trim(),
    },
    scopes: [SHEETS_SCOPE],
  })

  const client = await auth.getClient()
  const tokenResponse = await client.getAccessToken()

  const accessToken =
    typeof tokenResponse === 'string'
      ? tokenResponse
      : tokenResponse?.token

  if (!accessToken) {
    throw new Error('Google did not return an access token.')
  }

  return accessToken
}

function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  return res.status(status).json(body)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Method not allowed.' })
  }

  const body = req.body

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return sendJson(res, 400, {
      error: 'Please provide a valid name, email, and message.',
    })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message =
    typeof body.message === 'string' ? body.message.trim() : ''

  if (
    name.length < 1 ||
    name.length > 100 ||
    email.length < 3 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 1 ||
    message.length > 5000
  ) {
    return sendJson(res, 400, {
      error: 'Please provide a valid name, email, and message.',
    })
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim()
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  ?.replace(/^["']|["']$/g, '')
  ?.replace(/\\n/g, '\n')
  ?.trim();
  // Add these lines temporarily for debugging:
  console.log("DEBUG Email:", clientEmail);
  console.log("DEBUG Key starts correctly:", privateKey?.startsWith("-----BEGIN PRIVATE KEY-----"));
  console.log("DEBUG Key ends correctly:", privateKey?.endsWith("-----END PRIVATE KEY-----"));
  const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim()

  const missingVariables = [
    !clientEmail && 'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    !privateKey && 'GOOGLE_PRIVATE_KEY',
    !spreadsheetId && 'GOOGLE_SHEET_ID',
  ].filter(Boolean)

  if (missingVariables.length > 0) {
    console.error(
      'Google Sheets contact integration is missing environment variables:',
      missingVariables.join(', '),
    )
    return sendJson(res, 503, {
      error: 'The contact form is not fully configured yet. Please try again later.',
    })
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey)

    const range = encodeURIComponent("'Contact Messages'!A:D")
    const appendUrl =
      `https://sheets.googleapis.com/v4/spreadsheets/` +
      `${encodeURIComponent(spreadsheetId)}/values/${range}:append` +
      '?valueInputOption=RAW&insertDataOption=INSERT_ROWS'

    const response = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[new Date().toISOString(), name, email, message]],
      }),
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}))
      console.error(
        'Google Sheets append failed:',
        response.status,
        errorBody.error?.message || 'Unknown Google Sheets error',
      )
      return sendJson(res, 502, {
        error: 'Unable to save your message right now. Please try again later.',
      })
    }

    return sendJson(res, 200, { success: true })
  } catch (error) {
    console.error(
      'Contact message submission failed:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return sendJson(res, 502, {
      error: 'Unable to save your message right now. Please try again later.',
    })
  }
}
