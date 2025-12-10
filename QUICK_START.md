# Quick Start: Connect FlowiseAI to Your Chatbot

## 1. Install and Start FlowiseAI

```bash
# Install FlowiseAI globally
npm install -g flowise

# Start FlowiseAI
flowise start
```

FlowiseAI will be available at: `http://localhost:3000`

## 2. Create a Chatflow in FlowiseAI

1. Open `http://localhost:3000` in your browser
2. Click "New Chatflow"
3. Add these components:
   - **Chat Input** (drag from left panel)
   - **Chat Model** (e.g., OpenAI, Anthropic)
   - **Chat Output** (drag from left panel)
4. Connect them: Chat Input → Chat Model → Chat Output
5. Configure Chat Model:
   - Select your LLM provider
   - Add your API key
   - Configure model settings
6. Click "Save" and note your Chatflow ID from the URL

## 3. Configure Your Portfolio

### Option A: Using Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
VITE_FLOWISE_URL=http://localhost:3000
VITE_CHATFLOW_ID=your-chatflow-id-here
```

### Option B: Direct Configuration

Edit `src/config/flowiseConfig.js`:

```javascript
export const FLOWISE_URL = 'http://localhost:3000'
export const CHATFLOW_ID = 'your-chatflow-id-here'
```

## 4. Test It!

1. Start your portfolio: `npm run dev`
2. Navigate to AI Chat Assistant
3. Send a message
4. You should receive AI responses from FlowiseAI!

## Troubleshooting

- **CORS Error**: Enable CORS in FlowiseAI settings
- **404 Error**: Check your Chatflow ID is correct
- **Connection Refused**: Make sure FlowiseAI is running (`flowise start`)

For detailed instructions, see `FLOWISE_SETUP_GUIDE.md`

