# TechAI Hub Program - Deployment Guide

## Local Development

### Option 1: Using Node.js Server (Recommended)
```bash
# Install dependencies
npm install

# Start local server
npm start

# Or for development with auto-restart
npm run dev
```

Then visit: `http://localhost:3000`

### Option 2: Using Live Server (VS Code)
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The form will work with simulated submission (shows success message)

## Production Deployment (Netlify)

### Automatic Deployment
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Deploy automatically

### Manual Deployment
1. Build your project: `npm run build` (if needed)
2. Drag and drop your project folder to Netlify
3. Configure form handling in Netlify dashboard

## Form Data Storage

### In Production (Netlify)
- **Netlify Dashboard**: Go to your site → Forms section
- **Email Notifications**: You'll receive emails for each submission
- **Netlify API**: Access via `https://api.netlify.com/api/v1/sites/{site_id}/forms/{form_id}/submissions`

### In Local Development
- **Console Logs**: Form data is logged to the server console
- **No Persistent Storage**: Data is not saved locally

## Form Configuration

The form is configured with:
- **Name**: `techai-application`
- **Method**: POST
- **Action**: `/thank-you` (redirects to thank-you page)
- **Netlify Integration**: `data-netlify="true"`
- **Spam Protection**: Honeypot field included

## Troubleshooting

### 405 Error on Localhost
- Use the Node.js server instead of Live Server
- Or use the JavaScript simulation (already implemented)

### Form Not Submitting
- Check browser console for errors
- Ensure all required fields are filled
- Verify email format is correct

### Data Not Appearing in Netlify
- Ensure site is deployed to Netlify
- Check Netlify Forms section in dashboard
- Verify form name matches exactly
