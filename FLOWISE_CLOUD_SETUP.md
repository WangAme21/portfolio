# FlowiseAI Cloud Setup Guide

If you're using FlowiseAI Cloud (cloud.flowiseai.com), follow these specific instructions.

## Step 1: Get Your Chatflow ID

From your FlowiseAI Cloud URL:
- Your URL: `cloud.flowiseai.com/canvas/da70b8c6-8663-4c87-abba-38af5397328f`
- The Chatflow ID is the part after `/canvas/`: `da70b8c6-8663-4c87-abba-38af5397328f`

**OR** get it from the chatflow view URL:
- When you open your chatflow, the URL will be: `cloud.flowiseai.com/chatflow/{chatflowId}`
- Copy that `chatflowId`

## Step 2: Configure Your Portfolio

### Option A: Using Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
VITE_FLOWISE_URL=https://cloud.flowiseai.com
VITE_CHATFLOW_ID=da70b8c6-8663-4c87-abba-38af5397328f
```

### Option B: Direct Configuration

Edit `src/config/flowiseConfig.js`:

```javascript
export const FLOWISE_URL = 'https://cloud.flowiseai.com'
export const CHATFLOW_ID = 'da70b8c6-8663-4c87-abba-38af5397328f'
```

## Step 3: Common Issues with FlowiseAI Cloud

### Issue 1: CORS Error

FlowiseAI Cloud may have CORS restrictions. Solutions:

**Solution A: Use API Key Authentication**
1. In FlowiseAI Cloud, go to your chatflow settings
2. Enable "Public API" or get an API key
3. Add authentication to your config

**Solution B: Check API Endpoint**
- FlowiseAI Cloud might use a different API endpoint
- Try: `https://cloud.flowiseai.com/api/v1/prediction/{chatflowId}`
- Or: `https://cloud.flowiseai.com/api/v1/chatflows/{chatflowId}/chat`

### Issue 2: Authentication Required

If FlowiseAI Cloud requires authentication:

1. Get your API key from FlowiseAI Cloud dashboard
2. Add to `.env`:
   ```env
   VITE_FLOWISE_API_KEY=your-api-key-here
   ```

3. Update the API call to include the API key in headers

### Issue 3: Wrong API Endpoint Format

FlowiseAI Cloud might use a different endpoint format. Check:
- Standard: `/api/v1/prediction/{chatflowId}`
- Alternative: `/api/v1/chatflows/{chatflowId}/chat`
- Alternative: `/api/v1/chat/{chatflowId}`

## Step 4: Test the Connection

1. Open browser console (F12)
2. Try sending a message in your chatbot
3. Check for errors in the console
4. Look for:
   - CORS errors
   - 404 errors (wrong endpoint)
   - 401 errors (authentication needed)
   - 403 errors (permissions)

## Step 5: Verify Your Chatflow is Public

1. In FlowiseAI Cloud, open your chatflow
2. Check if there's a "Share" or "Public" option
3. Make sure the chatflow is accessible via API

## Troubleshooting Steps

1. **Check the exact API endpoint:**
   - Open browser DevTools → Network tab
   - Send a message
   - See what URL is being called
   - Compare with your config

2. **Test the API directly:**
   ```bash
   curl -X POST https://cloud.flowiseai.com/api/v1/prediction/da70b8c6-8663-4c87-abba-38af5397328f \
     -H "Content-Type: application/json" \
     -d '{"question": "Hello"}'
   ```

3. **Check FlowiseAI Cloud documentation:**
   - Visit FlowiseAI Cloud docs
   - Check for specific API endpoint format
   - Look for authentication requirements

## Quick Fix Checklist

- [ ] Chatflow ID is correct (from URL)
- [ ] FLOWISE_URL is `https://cloud.flowiseai.com` (not localhost)
- [ ] API endpoint format is correct
- [ ] CORS is handled (if needed)
- [ ] Authentication is set up (if required)
- [ ] Chatflow is public/accessible via API

## Need to Update the Code?

If FlowiseAI Cloud uses a different API format, we may need to update the `callFlowiseAPI` function. Check the browser console for the exact error message.

