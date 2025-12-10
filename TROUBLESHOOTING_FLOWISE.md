# FlowiseAI Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "FlowiseAI not configured" Message

**Symptoms:** Chatbot shows "FlowiseAI not configured" status

**Solutions:**
1. Check your `.env` file or `flowiseConfig.js`:
   ```env
   VITE_FLOWISE_URL=https://cloud.flowiseai.com
   VITE_CHATFLOW_ID=your-chatflow-id
   ```

2. Make sure you're using the correct Chatflow ID:
   - From canvas URL: `cloud.flowiseai.com/canvas/{id}` → Use this ID
   - From chatflow view: `cloud.flowiseai.com/chatflow/{id}` → Use this ID
   - **Note:** The ID from canvas might be different from chatflow ID

3. Restart your dev server after changing `.env`:
   ```bash
   npm run dev
   ```

### Issue 2: CORS Error

**Symptoms:** Browser console shows "CORS policy" error

**Solutions:**
1. **For FlowiseAI Cloud:**
   - FlowiseAI Cloud should handle CORS automatically
   - If not, you may need to use an API key

2. **For Self-Hosted:**
   - Enable CORS in FlowiseAI settings
   - Add your portfolio domain to allowed origins

3. **Alternative:** Use a proxy server or backend API route

### Issue 3: 404 Not Found Error

**Symptoms:** API returns 404 error

**Solutions:**
1. **Check Chatflow ID:**
   - Make sure the ID is correct
   - Get it from the chatflow view URL, not canvas URL
   - The ID should be a long string like: `da70b8c6-8663-4c87-abba-38af5397328f`

2. **Check API Endpoint:**
   - Default: `/api/v1/prediction/{chatflowId}`
   - Try alternative: `/api/v1/chatflows/{chatflowId}/chat`
   - Try alternative: `/api/v1/chat/{chatflowId}`

3. **Update `flowiseConfig.js`** to try different endpoints:
   ```javascript
   // Try this if default doesn't work
   export const FLOWISE_API_URL = `${FLOWISE_URL}/api/v1/chatflows/${CHATFLOW_ID}/chat`
   ```

### Issue 4: 401 Unauthorized Error

**Symptoms:** API returns 401 error

**Solutions:**
1. **For FlowiseAI Cloud:**
   - Get your API key from FlowiseAI Cloud dashboard
   - Add to `.env`:
     ```env
     VITE_FLOWISE_API_KEY=your-api-key-here
     ```

2. **For Self-Hosted:**
   - Add username/password to `.env`:
     ```env
     VITE_FLOWISE_USERNAME=your-username
     VITE_FLOWISE_PASSWORD=your-password
     ```

### Issue 5: Wrong Response Format

**Symptoms:** Chatbot receives response but can't display it

**Solutions:**
1. Check browser console for the actual response format
2. The code handles multiple formats:
   - `data.text`
   - `data.response`
   - Direct string
   - JSON stringify

3. If your response format is different, update `callFlowiseAPI` function

### Issue 6: Connection Timeout

**Symptoms:** Request takes too long or times out

**Solutions:**
1. Check your internet connection
2. Verify FlowiseAI Cloud is accessible
3. Check if your chatflow is processing correctly in FlowiseAI
4. Try a simpler test message

## How to Get Your Chatflow ID

### Method 1: From Canvas URL
- URL: `cloud.flowiseai.com/canvas/da70b8c6-8663-4c87-abba-38af5397328f`
- ID: `da70b8c6-8663-4c87-abba-38af5397328f`
- **Note:** This might be the canvas ID, not the chatflow ID

### Method 2: From Chatflow View (Recommended)
1. In FlowiseAI, click on your chatflow to open it
2. Look at the URL: `cloud.flowiseai.com/chatflow/{chatflowId}`
3. Copy the `{chatflowId}` part

### Method 3: From API Test
1. Open FlowiseAI dashboard
2. Find your chatflow
3. Look for "API" or "Share" button
4. It should show the chatflow ID

## Testing Your Configuration

### Step 1: Check Browser Console
1. Open your portfolio
2. Open browser DevTools (F12)
3. Go to Console tab
4. Try sending a message
5. Look for errors

### Step 2: Check Network Tab
1. Open DevTools → Network tab
2. Send a message
3. Find the API request
4. Check:
   - Request URL (is it correct?)
   - Request headers (authentication present?)
   - Response status (200, 404, 401?)
   - Response body (what format?)

### Step 3: Test API Directly
Use curl or Postman to test:

```bash
curl -X POST https://cloud.flowiseai.com/api/v1/prediction/your-chatflow-id \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{"question": "Hello"}'
```

## Quick Fix Checklist

- [ ] Chatflow ID is correct (from chatflow view URL)
- [ ] FLOWISE_URL is correct (`https://cloud.flowiseai.com` for cloud)
- [ ] Environment variables are set in `.env`
- [ ] Dev server restarted after changing `.env`
- [ ] API endpoint format is correct
- [ ] Authentication is configured (if needed)
- [ ] Chatflow is saved and accessible
- [ ] Browser console checked for errors
- [ ] Network tab checked for API calls

## Still Not Working?

1. **Check the exact error message** in browser console
2. **Check the Network tab** to see what's being sent/received
3. **Try a simple test** - send "Hello" and see what happens
4. **Verify in FlowiseAI** that your chatflow works there
5. **Check FlowiseAI Cloud documentation** for API format

## Need More Help?

- Check `FLOWISE_CLOUD_SETUP.md` for cloud-specific setup
- Check `FLOWISE_SETUP_GUIDE.md` for general setup
- Check browser console for specific error messages
- Verify your chatflow works in FlowiseAI interface first

