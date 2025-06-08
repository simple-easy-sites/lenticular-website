
# Vercel Deployment Configuration

To ensure your Lenticular AI landing page deploys correctly on Vercel, please configure your project settings as follows:

1.  **Navigate to Project Settings:**
    *   In Vercel, go to your Project > Settings > General.

2.  **Framework Settings (under Project Settings section):**
    *   **Framework Preset:** Select `Other`.
    *   **Build Command:**
        *   Turn **ON** the "Override" toggle.
        *   Set the command to: `npm run build`
    *   **Output Directory:**
        *   Turn **ON** the "Override" toggle.
        *   Leave the input field **COMPLETELY BLANK**. This tells Vercel to serve files from the root directory where your `index.html` and compiled `index.js` are located.
        *   If the UI does not allow a blank field after override, use a single dot (`.`).
    *   **Install Command:**
        *   Turn **ON** the "Override" toggle.
        *   Set the command to: `npm install`
    *   **Development Command:** This can usually be left as "None" or blank if you are not using `vercel dev`.

3.  **Save Changes.**

4.  **Trigger a New Deployment:**
    *   Go to the "Deployments" tab for your project.
    *   Redeploy your latest commit.
    *   **Important:** If prompted, ensure "Use existing Build Cache" is **UNCHECKED** for this first deployment with the new settings to force a clean build.

This configuration ensures Vercel:
- Installs your dependencies (`npm install`).
- Runs your custom build script (`npm run build`), which compiles `index.tsx` to `index.js` in the root.
- Serves your site from the root directory, correctly finding `index.html`.
- Your API routes in the `/api` directory will be deployed as serverless functions.
    