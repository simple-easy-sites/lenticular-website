
// Vercel will automatically make this a serverless function
// accessible at your-deployment-url.vercel.app/api/contact

import { ContactFormData } from '../types'; // Adjust path as necessary

export const POST = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const body: ContactFormData = await req.json();

    // --- Basic Validation (Optional, but recommended) ---
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ message: 'Missing required fields: name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Add more specific validation (e.g., email format)

    console.log('Received contact data on server:', body);

    // --- Google Sheets Integration Placeholder ---
    // 1. Install google-spreadsheet: `npm install google-spreadsheet` or `yarn add google-spreadsheet`
    // 2. Set up Environment Variables in Vercel:
    //    - GOOGLE_SERVICE_ACCOUNT_EMAIL
    //    - GOOGLE_PRIVATE_KEY
    //    - GOOGLE_SHEET_ID_CONTACT (the ID of your Google Sheet for contact messages)
    // 3. Uncomment and adapt the code below:

    /*
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const { JWT } = require('google-auth-library');

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID_CONTACT, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsByTitle['YourSheetTitle']`

    await sheet.addRow({
      'Name': body.name,
      'Email': body.email,
      'Phone': body.phone || '', // Handle optional field
      'Subject': body.subject || '', // Handle optional field
      'Message': body.message,
      'Timestamp': new Date().toISOString(),
    });
    
    console.log('Contact data successfully added to Google Sheet.');
    */
    // --- End Google Sheets Integration Placeholder ---

    return new Response(JSON.stringify({ message: 'Message sent successfully. We will get back to you soon!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing contact submission:', error);
    let errorMessage = 'Internal server error. Please try again later.';
     if (error instanceof SyntaxError) {
        errorMessage = 'Invalid data format received.';
    } else if (error instanceof Error) {
        // errorMessage = error.message; // For development
    }
    
    return new Response(JSON.stringify({ message: 'Error sending message.', error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
