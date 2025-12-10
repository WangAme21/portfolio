// FlowiseAI Configuration
// Update these values after setting up FlowiseAI

// Your FlowiseAI server URL
// For local development: http://localhost:3000
// For FlowiseAI Cloud: https://cloud.flowiseai.com
// For self-hosted: https://your-flowise-server.com
export const FLOWISE_URL = import.meta.env.VITE_FLOWISE_URL || 'http://localhost:3000'

// Your Chatflow ID from FlowiseAI
// Get this from the URL when you open your chatflow in FlowiseAI
// Example: 
//   - Local: http://localhost:3000/chatflow/abc123 -> chatflow ID is "abc123"
//   - Cloud: cloud.flowiseai.com/canvas/da70b8c6-8663-4c87-abba-38af5397328f -> chatflow ID is "da70b8c6-8663-4c87-abba-38af5397328f"
export const CHATFLOW_ID = import.meta.env.VITE_CHATFLOW_ID || ''

// API Endpoint - FlowiseAI Cloud might use different endpoints
// Try these formats if the default doesn't work:
// 1. /api/v1/prediction/{chatflowId} (default)
// 2. /api/v1/chatflows/{chatflowId}/chat
// 3. /api/v1/chat/{chatflowId}
export const FLOWISE_API_URL = `${FLOWISE_URL}/api/v1/prediction/${CHATFLOW_ID}`

// Alternative API endpoints (uncomment if default doesn't work)
// export const FLOWISE_API_URL = `${FLOWISE_URL}/api/v1/chatflows/${CHATFLOW_ID}/chat`
// export const FLOWISE_API_URL = `${FLOWISE_URL}/api/v1/chat/${CHATFLOW_ID}`

// Optional: Add authentication if your FlowiseAI requires it
export const FLOWISE_AUTH = {
  username: import.meta.env.VITE_FLOWISE_USERNAME || '',
  password: import.meta.env.VITE_FLOWISE_PASSWORD || '',
}

// Optional: API Key for FlowiseAI Cloud
export const FLOWISE_API_KEY = import.meta.env.VITE_FLOWISE_API_KEY || ''

