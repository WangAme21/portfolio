# Pre-Deployment Checklist

Use this checklist before deploying your portfolio to Vercel.

## Code Preparation

- [ ] All code is committed to Git
- [ ] Code is pushed to GitHub/GitLab/Bitbucket
- [ ] `.gitignore` includes `.env` files
- [ ] No sensitive data in code (API keys, passwords, etc.)
- [ ] All dependencies are in `package.json`
- [ ] No unnecessary files in repository

## Build Testing

- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` works locally
- [ ] No build warnings or errors
- [ ] All assets (images, fonts) load correctly

## Functionality Testing

- [ ] All sections load correctly (About, Projects, Skills, etc.)
- [ ] Navigation works on all pages
- [ ] Calculator app functions properly
- [ ] Task Manager app functions properly
- [ ] Fitness Tracker app functions properly
- [ ] AI Chat Assistant works (or shows proper fallback)
- [ ] Chat widget button appears and works
- [ ] Contact form works (if connected to backend)
- [ ] All links work (GitHub, Facebook, etc.)
- [ ] Resume download works (if resume.pdf exists)

## Responsive Design

- [ ] Site works on desktop (1920px, 1366px)
- [ ] Site works on tablet (768px)
- [ ] Site works on mobile (375px, 414px)
- [ ] Navigation menu works on mobile
- [ ] Chat widget works on mobile
- [ ] All projects are usable on mobile

## Performance

- [ ] Images are optimized
- [ ] No console errors
- [ ] Fast page load times
- [ ] Smooth animations

## Environment Variables

- [ ] FlowiseAI URL configured (if using)
- [ ] Chatflow ID configured (if using)
- [ ] All environment variables documented
- [ ] Variables ready to add in Vercel dashboard

## Documentation

- [ ] README.md is updated
- [ ] Deployment guide is ready
- [ ] Setup instructions are clear

## Security

- [ ] No API keys in code
- [ ] Environment variables for sensitive data
- [ ] `.env` files in `.gitignore`

## Final Steps

- [ ] Test build one more time: `npm run build`
- [ ] Review all files one last time
- [ ] Push final changes to repository
- [ ] Ready to deploy!

## Post-Deployment Testing

After deploying to Vercel:

- [ ] Visit deployed URL
- [ ] Test all functionality
- [ ] Test on different devices
- [ ] Check mobile responsiveness
- [ ] Verify environment variables work
- [ ] Test chatbot (if configured)
- [ ] Check all external links
- [ ] Verify resume download works

## Quick Test Commands

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Test build
npm run build

# Preview build
npm run preview

# Check for issues
npm audit
```

---

**Ready to deploy?** Follow the `VERCEL_DEPLOYMENT_GUIDE.md` for step-by-step instructions!

