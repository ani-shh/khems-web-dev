# Google Sheets Integration Setup

This guide explains how to set up Google Sheets to receive form submissions from the contact form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) (logged in as anish.zunkireelabs@gmail.com)
2. Create a new spreadsheet
3. Name it "Khems Cleaning Leads"
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Full Name`
   - C1: `Location`
   - D1: `Contact Number`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.location || '',
      data.contactNumber || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'Khems Cleaning Lead Form API' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the project (Ctrl+S or Cmd+S)
4. Name the project "Khems Lead Form"

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure:
   - Description: "Khems Lead Form"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts to grant permissions
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/xxx.../exec`)

## Step 4: Configure the Website

1. Open `.env.local` in the project root
2. Add the Web App URL:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Rebuild and redeploy the website

## Testing

After setup, submit a test form on the website. Check your Google Sheet - a new row should appear with the submitted data.

## Troubleshooting

- **Form submits but no data appears**: Check that the Web App URL is correct in `.env.local`
- **Authorization errors**: Re-authorize the script in Apps Script
- **CORS errors**: The form uses `no-cors` mode, so this shouldn't happen, but ensure the Web App is set to "Anyone"

## Security Notes

- The Google Apps Script URL is public but only accepts POST requests with specific data
- Consider adding rate limiting or CAPTCHA for production use
- Regularly monitor the sheet for spam submissions
