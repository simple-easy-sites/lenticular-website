
// Vercel will automatically make this a serverless function
// accessible at your-deployment-url.vercel.app/api/submit-onboarding

import { OnboardingFormData } from '../types'; // Adjust path as necessary

interface OnboardingSubmissionData extends OnboardingFormData {
  planName: string;
  planPrice: string;
  planSetupFee?: string; 
  // title is already part of OnboardingFormData, no need to redefine
}

export const POST = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const body: OnboardingSubmissionData = await req.json();
    
    // --- Basic Validation ---
    if (!body.companyName || !body.contactName || !body.title || !body.email || !body.phone || !body.goals || !body.currentChallenges || !body.planName || !body.planPrice) {
      return new Response(JSON.stringify({ message: 'Missing required fields for onboarding. Ensure all fields marked * are filled.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Received onboarding data on server:', body);

    // --- Google Sheets Integration Placeholder for Onboarding ---
    // 1. Ensure `google-spreadsheet` is installed.
    // 2. Set up Environment Variables in Vercel for a NEW Google Sheet for onboarding:
    //    - GOOGLE_SERVICE_ACCOUNT_EMAIL (can be the same as other forms)
    //    - GOOGLE_PRIVATE_KEY (can be the same)
    //    - GOOGLE_SHEET_ID_ONBOARDING (ID of your new Google Sheet for onboarding data)
    // 3. Uncomment and adapt the code below, ensuring headers match your new sheet:

    /*
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const { JWT } = require('google-auth-library');

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID_ONBOARDING, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsByTitle['YourOnboardingSheetTitle']`

    // Append new row - Ensure keys here match your Google Sheet headers EXACTLY
    await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Selected Plan Name': body.planName,
      'Selected Plan Price': body.planPrice,
      'Selected Plan Setup Fee': body.planSetupFee || 'N/A', 
      'Company Name': body.companyName,
      'Contact Name': body.contactName,
      'Title': body.title, // Added title
      'Email': body.email,
      'Phone': body.phone, // Phone is now required
      'Website': body.website || '',
      'Goals': body.goals,
      'Current Challenges': body.currentChallenges,
      'Additional Info': body.additionalInfo || '',
    });

    console.log('Onboarding data successfully added to Google Sheet.');
    */
    // --- End Google Sheets Integration Placeholder ---

    return new Response(JSON.stringify({ message: 'Onboarding information submitted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing onboarding submission:', error);
    let errorMessage = 'Internal server error. Please try again later.';
    if (error instanceof SyntaxError) { // JSON parsing error
        errorMessage = 'Invalid data format received.';
    } else if (error instanceof Error && error.message) {
        // Potentially mask internal errors in production, but for now provide some detail
        errorMessage = `Failed to process submission: ${error.message}`; 
    }
    
    return new Response(JSON.stringify({ message: 'Error submitting onboarding information.', error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};