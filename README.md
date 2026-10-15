# Skill2Career website

React and Vite website deployed on Vercel.

## Contact form and Google Sheets

Contact submissions are sent to the Vercel serverless function at `/api/contact` and appended to the `Contact Messages` tab of the configured Google Sheet. The sheet is accessed server-side; Google credentials must never be added to client-side code or committed to the repository.

### Configure Google Sheets access

1. In Google Cloud Console, create or select a project and enable the Google Sheets API.
2. Create a service account and generate a JSON key. Keep the downloaded key private.
3. Open the target spreadsheet and share it with the service account email address as an **Editor**.
4. Create a sheet tab named `Contact Messages` and add these headers in row 1: `Submitted At`, `Name`, `Email`, `Message`.
5. In Vercel, open the project's **Settings → Environment Variables** and add:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: the service account's `client_email` from its JSON key.
   - `GOOGLE_PRIVATE_KEY`: the service account's `private_key` from its JSON key. Paste the full key, including the `BEGIN PRIVATE KEY` and `END PRIVATE KEY` lines.
   - `GOOGLE_SHEET_ID`: the ID between `/d/` and `/edit` in the spreadsheet URL.
6. Apply the variables to the desired Vercel environments and redeploy the project.

Do not expose the service account key in `VITE_*` variables, frontend code, or Git. The API validates submissions and appends values using the Sheets API's `RAW` input mode.

## Development

```sh
npm install
npm run dev
```

The Vite development server does not run Vercel serverless functions. To test contact submissions locally, use the Vercel CLI with the required environment variables configured.

## Build

```sh
npm run build
```
