# Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel, a popular platform for hosting React applications.

## Prerequisites

- A GitHub account (recommended) or GitLab/Bitbucket
- Your portfolio code pushed to a Git repository
- Node.js installed locally (for testing builds)

## Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-elai.git
   git push -u origin main
   ```

2. **Create a `.gitignore` file** (if not already present)
   ```
   node_modules/
   dist/
   .env
   .env.local
   .vscode/
   .DS_Store
   *.log
   ```

### Step 2: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended) or use email
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. **Click "Add New Project"** on your Vercel dashboard
2. **Import your repository**
   - Select your GitHub account
   - Find and select your `portfolio-elai` repository
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (if needed)
   - If you're using FlowiseAI, add:
     - `VITE_FLOWISE_URL` = Your FlowiseAI server URL
     - `VITE_CHATFLOW_ID` = Your Chatflow ID
   - Click "Add" for each variable

5. **Click "Deploy"**

### Step 4: Wait for Deployment

- Vercel will automatically:
  - Install dependencies
  - Build your project
  - Deploy it to a production URL
- This usually takes 1-3 minutes
- You'll see build logs in real-time

### Step 5: Access Your Deployed Site

- Once deployed, you'll get a URL like: `https://portfolio-elai.vercel.app`
- Your site is now live!

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

From your project directory:

```bash
# First deployment (will ask questions)
vercel

# Production deployment
vercel --prod
```

The CLI will:
- Detect your framework (Vite)
- Ask for project settings
- Deploy your site

## Configuration Files

### Create `vercel.json` (Optional)

Create a `vercel.json` file in your project root for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures proper routing for your React Router hash routes.

## Environment Variables Setup

### ⚠️ Important: .env Files and Deployment

**Your `.env` file is already in `.gitignore` - this is correct!**

- ✅ `.env` files should NEVER be committed to GitHub (security risk!)
- ✅ For local development: Use `.env` file
- ✅ For production: Add variables in Vercel Dashboard

### For FlowiseAI Integration

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings"
   - Click "Environment Variables"
   - Add your variables:
     ```
     VITE_FLOWISE_URL = https://cloud.flowiseai.com
     VITE_CHATFLOW_ID = your-chatflow-id
     VITE_FLOWISE_API_KEY = your-api-key (if needed)
     ```
   - **Important**: Select "Production", "Preview", and "Development" environments
   - Click "Save" for each variable

2. **Redeploy after adding variables:**
   - Go to "Deployments" tab
   - Click the three dots (⋯) on latest deployment
   - Click "Redeploy"
   - Your APIs will now work in production!

### Why This Works

- **Local**: `.env` file → Vite reads it → Works locally
- **Production**: Vercel Dashboard → Variables injected during build → Works in production

Both provide the same variables, just from different sources!

📖 **See `ENV_VARIABLES_GUIDE.md` for detailed explanation**

### Important Notes:
- Variables starting with `VITE_` are exposed to the browser
- Never commit sensitive API keys to your repository
- Use Vercel's environment variables for production secrets

## Build Optimization

### Check Your `package.json`

Make sure your build script is correct:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Test Build Locally

Before deploying, test your build:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview your production build.

## Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `yourname.com`)
4. Click "Add"

### Step 2: Configure DNS

Vercel will provide DNS records. Add them to your domain registrar:

- **A Record**: Point to Vercel's IP
- **CNAME Record**: Point to Vercel's domain
- **Or use Vercel's nameservers**

### Step 3: Wait for Propagation

DNS changes can take 24-48 hours to propagate.

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Vercel automatically:**
   - Detects the push
   - Builds your project
   - Deploys the new version

## Troubleshooting

### Issue: Build Fails

**Solutions:**
- Check build logs in Vercel dashboard
- Test build locally: `npm run build`
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors if using TypeScript

### Issue: 404 Errors on Routes

**Solution:** Add `vercel.json` with rewrites (see Configuration Files section above)

### Issue: Environment Variables Not Working

**Solutions:**
- Ensure variables start with `VITE_` for Vite projects
- Redeploy after adding variables
- Check variable names match exactly

### Issue: Images Not Loading

**Solutions:**
- Ensure images are in `public` folder or imported correctly
- Check image paths are relative
- Verify file names match exactly (case-sensitive)

### Issue: FlowiseAI CORS Errors

**Solutions:**
- Enable CORS on your FlowiseAI server
- Add your Vercel domain to FlowiseAI allowed origins
- Or use a proxy/backend API route

## Performance Optimization

### 1. Enable Vercel Analytics (Optional)

1. Go to project settings
2. Enable "Analytics"
3. Get insights on your site's performance

### 2. Optimize Images

- Use WebP format when possible
- Compress images before uploading
- Consider using Vercel's Image Optimization

### 3. Code Splitting

Vite automatically code-splits, but you can optimize:
- Lazy load routes
- Lazy load heavy components

## Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are in `package.json`
- [ ] `.env` files are in `.gitignore`
- [ ] Build works locally (`npm run build`)
- [ ] No console errors
- [ ] All images/assets are included
- [ ] Environment variables are set in Vercel
- [ ] `vercel.json` is configured (if needed)
- [ ] Test all routes work correctly
- [ ] Test chatbot widget (if using FlowiseAI)

## Quick Deploy Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

## Post-Deployment

### 1. Test Your Site

- Visit your deployed URL
- Test all sections
- Test all projects (Calculator, Task Manager, etc.)
- Test the chatbot widget
- Test on mobile devices

### 2. Monitor Performance

- Check Vercel Analytics
- Monitor build times
- Check error logs

### 3. Set Up Custom Domain (Optional)

- Add your domain in Vercel settings
- Configure DNS records
- Wait for propagation

## Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **Vercel Support**: https://vercel.com/support

## Common Vercel URLs

After deployment, you'll get:
- **Production**: `https://your-project.vercel.app`
- **Preview**: `https://your-project-git-branch.vercel.app` (for each branch)

## Need Help?

- Check Vercel dashboard for detailed error logs
- Visit Vercel community forums
- Check your build logs for specific errors

---

**Congratulations!** Your portfolio is now live on Vercel! 🎉

