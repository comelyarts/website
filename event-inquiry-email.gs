/**
 * Google Apps Script: send event inquiry email to Comely Arts
 *
 * 1. Go to https://script.google.com
 * 2. New project → paste this entire file
 * 3. Deploy → New deployment → type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL
 * 5. In this project, set EVENT_INQUIRY_SUBMIT_URL in src/lib/index.ts to that URL
 */

const RECIPIENT = 'comelyartsbyyou@gmail.com';

function doPost(e) {
  try {
    const data = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    const { name = '', contact = '', email = '', date = '', eventType = '' } = data;

    const subject = 'Callback requested – Comely Arts';
    const body = [
      'A customer requested a callback from the website.',
      '',
      'Name: ' + name,
      'Contact number: ' + contact,
      'Email: ' + email,
      'Date of event: ' + date,
      'Event type: ' + eventType,
    ].join('\n');

    GmailApp.sendEmail(RECIPIENT, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
