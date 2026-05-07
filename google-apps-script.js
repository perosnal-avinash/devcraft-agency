/**
 * DevCraft Contact Form → Google Sheets
 *
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets → create a new spreadsheet named "DevCraft Leads"
 * 2. Click Extensions → Apps Script
 * 3. Replace the default code with this entire file
 * 4. Click Save (floppy disk icon)
 * 5. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy → copy the Web App URL
 * 7. Paste the URL into your .env.local:
 *    GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
 * 8. Restart the Next.js dev server: npm run dev
 *
 * The script auto-creates headers on the first submission.
 */

const SHEET_NAME = "Leads"; // tab name inside your spreadsheet

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Get or create the Leads sheet
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Write headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Service",
        "Budget",
        "Timeline",
        "Message",
        "NDA Requested",
      ]);

      // Bold + freeze header row
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the submission
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name        || "",
      data.email       || "",
      data.phone       || "",
      data.company     || "",
      data.service     || "",
      data.budget      || "",
      data.timeline    || "",
      data.message     || "",
      data.nda ? "Yes" : "No",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check — open the web app URL in a browser to confirm it's deployed
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", app: "DevCraft Contact Handler" }))
    .setMimeType(ContentService.MimeType.JSON);
}
