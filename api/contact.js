import { createSign } from 'node:crypto'

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'
const TOKEN_URL = 'https://oauth2.googleapis.com/token'

function encodeBase64Url(value) {
  return Buffer.from(value).toString('base64url')
}

function createSignedAssertion(clientEmail, privateKey) {
  const issuedAt = Math.floor(Date.now() / 1000)
  const header = encodeBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = encodeBase64Url(JSON.stringify({
    iss: clientEmail,
    scope: SHEETS_SCOPE,
    aud: TOKEN_URL,
    iat: issuedAt,
    exp: issuedAt + 3600,
  }))
  const unsignedToken = `${header}.${claims}`
  const signer = createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()

  return `${unsignedToken}.${signer.sign(privateKey).toString('base64url')}`
}

async function getAccessToken(clientEmail, privateKey) {
  const assertion = createSignedAssertion(clientEmail, privateKey)
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })
  const result = await response.json()

  if (!response.ok || typeof result.access_token !== 'string') {
    console.error('Google OAuth token request failed:', response.status)
    throw new Error('Unable to connect to the message spreadsheet.')
  }

  return result.access_token
}

function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.status(status).json(body)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Method not allowed.' })
  }

  const body = req.body
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return sendJson(res, 400, { error: 'Please provide a valid name, email, and message.' })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (
    name.length < 1 || name.length > 100 ||
    email.length < 3 || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 1 || message.length > 5000
  ) {
    return sendJson(res, 400, { error: 'Please provide a valid name, email, and message.' })
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.error('Google Sheets contact integration is missing required environment variables.')
    return sendJson(res, 500, { error: 'The contact form is temporarily unavailable. Please try again later.' })
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey)
    const range = encodeURIComponent("'Contact Messages'!A:D")
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`
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
      console.error('Google Sheets append failed:', response.status)
      return sendJson(res, 502, { error: 'Unable to save your message right now. Please try again later.' })
    }

    return sendJson(res, 200, { success: true })
  } catch (error) {
    console.error('Contact message submission failed:', error instanceof Error ? error.message : 'Unknown error')
    return sendJson(res, 502, { error: 'Unable to save your message right now. Please try again later.' })
  }
}
