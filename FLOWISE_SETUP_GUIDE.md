# FlowiseAI Setup Guide

This guide will help you set up FlowiseAI and connect it to your portfolio chatbot.

## What is FlowiseAI?

FlowiseAI is an open-source low-code tool for building LLM (Large Language Model) applications. It provides a visual interface to create AI chatbots without writing complex code.

## Step 1: Install FlowiseAI

### Option A: Using npm (Recommended)

```bash
npm install -g flowise
```

### Option B: Using npx (No installation needed)

You can run FlowiseAI directly without installing:

```bash
npx flowise start
```

### Option C: Using Docker

```bash
docker run -d --name flowise -p 3000:3000 flowiseai/flowise
```

## Step 2: Start FlowiseAI

After installation, start FlowiseAI:

```bash
flowise start
```

Or if using npx:

```bash
npx flowise start
```

FlowiseAI will start on `http://localhost:3000`

## Step 3: Create Your Chatflow

1. **Open FlowiseAI Dashboard**
   - Navigate to `http://localhost:3000` in your browser
   - You'll see the FlowiseAI interface

2. **Create a New Chatflow**
   - Click on "New Chatflow" or the "+" button
   - You'll see a canvas where you can drag and drop components

3. **Add Components**
   - **Chat Model**: Drag a Chat Model node (e.g., OpenAI, Anthropic, etc.)
   - **Chat Input**: Drag a Chat Input node
   - **Chat Output**: Drag a Chat Output node

4. **Configure the Chat Model**
   - Click on the Chat Model node
   - Select your LLM provider (OpenAI, Anthropic, etc.)
   - Add your API key:
     - For OpenAI: Get your API key from https://platform.openai.com/api-keys
     - For Anthropic: Get your API key from https://console.anthropic.com/
   - Configure the model settings (temperature, max tokens, etc.)

5. **Connect the Nodes**
   - Connect Chat Input → Chat Model → Chat Output
   - This creates the basic flow for your chatbot

6. **Save Your Chatflow**
   - Click "Save" and give your chatflow a name
   - Note the Chatflow ID (you'll need this for the API)

## Step 4: Get Your Chatflow ID

1. After saving, you'll see your chatflow in the list
2. Click on your chatflow to open it
3. Look at the URL: `http://localhost:3000/chatflow/{chatflowId}`
4. Copy the `chatflowId` from the URL

## Step 5: Configure Your Portfolio

1. **Update the Configuration**
   - Open `src/config/flowiseConfig.js` in your project
   - Update the `FLOWISE_URL` to your FlowiseAI server URL
   - Update the `CHATFLOW_ID` with your chatflow ID

2. **If FlowiseAI is on a different server**
   - Update `FLOWISE_URL` to your server URL (e.g., `https://your-flowise-server.com`)
   - Make sure CORS is enabled on your FlowiseAI server

## Step 6: Enable CORS (If needed)

If you're running FlowiseAI on a different server, you need to enable CORS:

1. **Using Environment Variables**
   ```bash
   export FLOWISE_USERNAME=your_username
   export FLOWISE_PASSWORD=your_password
   ```

2. **Or modify FlowiseAI config**
   - In FlowiseAI settings, enable CORS
   - Add your portfolio domain to allowed origins

## Step 7: Test the Connection

1. Start your portfolio: `npm run dev`
2. Navigate to the AI Chat Assistant project
3. Send a test message
4. You should receive a response from FlowiseAI

## Troubleshooting

### Issue: CORS Error
**Solution**: Enable CORS in FlowiseAI or use a proxy server

### Issue: 404 Not Found
**Solution**: 
- Check that your Chatflow ID is correct
- Make sure FlowiseAI is running
- Verify the API endpoint URL

### Issue: API Key Error
**Solution**: 
- Verify your API key is correct in FlowiseAI
- Check that you have credits/quota available

### Issue: Connection Refused
**Solution**: 
- Make sure FlowiseAI is running (`flowise start`)
- Check the port (default is 3000)
- Verify firewall settings

## Advanced Configuration

### Using Environment Variables

Create a `.env` file in your project root:

```env
VITE_FLOWISE_URL=http://localhost:3000
VITE_CHATFLOW_ID=your-chatflow-id-here
```

### Deploying FlowiseAI

For production, you can deploy FlowiseAI to:
- **Cloud Platforms**: AWS, Google Cloud, Azure
- **VPS**: DigitalOcean, Linode, etc.
- **Docker**: Use Docker Compose for easy deployment

### Using Different LLM Providers

FlowiseAI supports:
- OpenAI (GPT-3.5, GPT-4)
- Anthropic (Claude)
- Google (PaLM, Gemini)
- Hugging Face
- Local models (Ollama, etc.)

## Need Help?

- **FlowiseAI Documentation**: https://docs.flowiseai.com/
- **FlowiseAI GitHub**: https://github.com/FlowiseAI/Flowise
- **Discord Community**: Join the FlowiseAI Discord for support

## Quick Start Command Summary

```bash
# Install FlowiseAI
npm install -g flowise

# Start FlowiseAI
flowise start

# Access dashboard
# Open http://localhost:3000 in your browser

# Create chatflow and get ID
# Copy the chatflow ID from the URL

# Update config in your project
# Edit src/config/flowiseConfig.js
```

