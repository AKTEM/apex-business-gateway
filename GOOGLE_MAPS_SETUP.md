# Google Maps Setup Guide

Your Akilina website includes an interactive Google Map on the Contact section. Follow these steps to get it working:

## Quick Setup (5 minutes)

### Step 1: Get a Google Cloud Console Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (create one if needed)

### Step 2: Create a Project
1. Click **"Select a Project"** at the top
2. Click **"New Project"**
3. Enter project name: `Akilina Maps` or any name you prefer
4. Click **Create** and wait for initialization

### Step 3: Enable APIs
1. In the left menu, find **"APIs & Services"** → **"Enabled APIs & Services"**
2. Click **"Enable APIs and Services"** button
3. Search for and enable these two APIs (one at a time):
   - **Maps JavaScript API** - for rendering the map
   - **Geocoding API** - for location features
4. For each API:
   - Click on it
   - Click the **Enable** button
   - Wait for it to show "Enabled"

### Step 4: Create an API Key
1. Go to **"APIs & Services"** → **"Credentials"** (left menu)
2. Click **"Create Credentials"** → **"API Key"**
3. Your API key will appear in a dialog (looks like: `AIzaSy...1234...`)
4. Copy the entire key

### Step 5: Add Key to Your Project
1. Open `/tmp/cc-agent/66682696/project/.env` file
2. Replace the placeholder on line 3:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyA7W6VVmK5Yc5RhP4R8p8Q2L3M4N5O6P7Q
   ```
   with your real key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSy... (your actual key)
   ```
3. Save the file

### Step 6: Restart Development Server
```bash
npm run dev
```

The map should now display on the Contact section!

## Securing Your API Key (Important)

To prevent unauthorized use and charges:

1. Go back to **Credentials** in Google Cloud Console
2. Click on your API Key
3. Under **Application restrictions**, select **HTTP referrers (websites)**
4. Add your website URLs:
   ```
   https://yourdomain.com/*
   https://www.yourdomain.com/*
   ```
5. Under **API restrictions**, select **Restrict key**
6. Choose only:
   - Maps JavaScript API
   - Geocoding API
7. Click **Save**

## What Gets Displayed

Your map shows:
- ✅ Lagos, Nigeria (company headquarters)
- ✅ Red custom marker with company pin
- ✅ Interactive info window when marker is clicked
- ✅ Full map controls (zoom, pan, street view)
- ✅ Responsive design for all devices
- ✅ Animated entrance and hover effects

## Troubleshooting

### Map shows error message
- Verify the API key was copied correctly (no spaces)
- Confirm both APIs are enabled in Google Cloud
- Wait 5 minutes for API enablement to take effect

### Map is blank/gray
- Check browser console (F12) for error messages
- Ensure the API key in .env matches your Cloud Console key
- Try a different browser

### Getting charged unexpectedly
- You have a $200/month free quota from Google
- Set API key restrictions ASAP to prevent abuse
- Check your usage in Google Cloud Console → Billing

## Development vs. Production

**During Development:**
- You can test without domain restrictions
- Just add your API key to `.env`

**Before Going Live:**
1. Set up HTTP referrer restrictions
2. Enable billing alerts in Google Cloud Console
3. Monitor your API usage regularly

## Need Help?

- [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript)
- [Google Cloud Console Help](https://cloud.google.com/docs)
- Check browser console (F12) for detailed error messages

---

**Your map is now fully set up and ready to impress visitors!** 🗺️
