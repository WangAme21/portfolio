# Environment Variables Guide

## Quick Answer

**Yes!** You should `.gitignore` your `.env` file. For deployment, you'll add your environment variables directly in Vercel's dashboard. Your APIs will work perfectly!

## How It Works

### Local Development (Your Computer)
- `.env` file is used for local development
- `.gitignore` prevents it from being committed to GitHub
- This keeps your API keys **secure** and **private**

### Production (Vercel)
- Environment variables are set in **Vercel Dashboard**
- They're injected during the build process
- Your deployed site will have access to all APIs

## Step-by-Step: Setting Up Environment Variables in Vercel

### Method 1: During Initial Deployment

1. **Import your project** to Vercel
2. **Before clicking "Deploy"**, you'll see a section for "Environment Variables"
3. **Add each variable:**
   ```
   VITE_FLOWISE_URL = https://cloud.flowiseai.com
   VITE_CHATFLOW_ID = da70b8c6-8663-4c87-abba-38af5397328f
   VITE_FLOWISE_API_KEY = Lr-bYx1pSQn0NeWArUFl_kk0bMNR193hVUbA76Vr7z8
   ```
4. Click "Add" for each one
5. Click "Deploy"

### Method 2: Add After Deployment

1. Go to your project in **Vercel Dashboard**
2. Click **"Settings"** (in the top menu)
3. Click **"Environment Variables"** (in the left sidebar)
4. Click **"Add New"**
5. Enter:
   - **Name**: `VITE_FLOWISE_URL`
   - **Value**: `https://cloud.flowiseai.com`
   - **Environment**: Select "Production", "Preview", and "Development" (or just "Production")
6. Click **"Save"**
7. Repeat for all variables
8. **Redeploy** your site:
   - Go to "Deployments" tab
   - Click the three dots (⋯) on the latest deployment
   - Click "Redeploy"

## Important Notes

### ✅ DO:
- Keep `.env` in `.gitignore` (already done!)
- Add environment variables in Vercel Dashboard
- Use the exact same variable names (case-sensitive)
- Redeploy after adding/changing variables

### ❌ DON'T:
- Commit `.env` to GitHub (security risk!)
- Forget to add variables in Vercel
- Use different variable names

## Your Current Variables

Based on your setup, you need these in Vercel:

```
VITE_FLOWISE_URL=https://cloud.flowiseai.com
VITE_CHATFLOW_ID=da70b8c6-8663-4c87-abba-38af5397328f
VITE_FLOWISE_API_KEY=Lr-bYx1pSQn0NeWArUFl_kk0bMNR193hVUbA76Vr7z8
```

## Testing After Deployment

1. Deploy your site to Vercel
2. Add environment variables in Vercel Dashboard
3. Redeploy (if you added variables after deployment)
4. Visit your deployed site
5. Test the chatbot - it should work with FlowiseAI!

## Why This Works

- **Local**: `.env` file → Vite reads it → Your app works
- **Production**: Vercel Dashboard → Variables injected during build → Your app works

Both methods provide the same variables to your app, just different sources!

## Security Benefits

✅ Your API keys stay private (not in GitHub)  
✅ Different keys for development vs production  
✅ Easy to update without changing code  
✅ Team members can have their own keys  

## Troubleshooting

### Issue: Variables not working after deployment

**Solution:**
1. Check variable names match exactly (case-sensitive)
2. Make sure they start with `VITE_` for Vite projects
3. Redeploy after adding variables
4. Check Vercel build logs for errors

### Issue: Variables work locally but not in production

**Solution:**
1. Verify variables are added in Vercel Dashboard
2. Check you selected the correct environment (Production)
3. Make sure you redeployed after adding variables

## Quick Checklist

Before deploying:
- [ ] `.env` is in `.gitignore` ✅ (already done)
- [ ] Code is pushed to GitHub
- [ ] Ready to add variables in Vercel Dashboard

After deploying:
- [ ] Added all environment variables in Vercel
- [ ] Selected correct environment (Production)
- [ ] Redeployed the site
- [ ] Tested the chatbot on deployed site

---

**Remember**: Your `.env` file is for local development only. For production, use Vercel's Environment Variables feature!


