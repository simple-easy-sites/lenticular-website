
// Vercel will automatically make this a serverless function
// accessible at your-deployment-url.vercel.app/api/submit-lead

import { LeadMagnetFormData } from '../types'; // Adjust path as necessary if types.ts is not in root

export const POST = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const body: LeadMagnetFormData = await req.json();
    
    // --- Basic Validation (Optional, but recommended) ---
    if (!body.businessName || !body.yourName || !body.email) {
      return new Response(JSON.stringify({ message: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Add more specific validation as needed (e.g., email format)

    console.log('Received lead data on server:', body);

    // --- Google Sheets Integration Placeholder ---
    // 1. Install google-spreadsheet: `npm install google-spreadsheet` or `yarn add google-spreadsheet`
    // 2. Set up Environment Variables in Vercel:
    //    - GOOGLE_SERVICE_ACCOUNT_EMAIL
    //    - GOOGLE_PRIVATE_KEY (copy the full private key, including -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n)
    //    - GOOGLE_SHEET_ID_LEAD_MAGNET (the ID of your Google Sheet)
    // 3. Uncomment and adapt the code below:

    /*
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const { JWT } = require('google-auth-library');

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure newlines are correctly formatted
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID_LEAD_MAGNET, serviceAccountAuth);

    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsByTitle['YourSheetTitle']`

    // Append new row
    await sheet.addRow({
      'Business Name': body.businessName,
      'Your Name': body.yourName,
      'Email': body.email,
      'Phone Number': body.phoneNumber,
      'Industry': body.industry,
      'Biggest Challenge': body.biggestChallenge,
      'Timestamp': new Date().toISOString(), // Optional: add a timestamp
    });

    console.log('Lead data successfully added to Google Sheet.');
    */
    // --- End Google Sheets Integration Placeholder ---


    // If Google Sheets integration is successful (or if not implemented yet, assume success for now)
    return new Response(JSON.stringify({ message: 'Lead submitted successfully. We will be in touch soon!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing lead submission:', error);
    let errorMessage = 'Internal server error. Please try again later.';
    if (error instanceof SyntaxError) { // JSON parsing error
        errorMessage = 'Invalid data format received.';
    } else if (error instanceof Error) {
        // Potentially mask internal errors in production
        // errorMessage = error.message; // For development
    }
    
    return new Response(JSON.stringify({ message: 'Error submitting lead.', error: errorMessage }), {
      status: 500, // Or 400 for validation errors if you implement them before this catch
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
