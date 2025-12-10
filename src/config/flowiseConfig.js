// FlowiseAI Configuration
// Update these values after setting up FlowiseAI

// Your FlowiseAI server URL
// For local development: http://localhost:3000
// For production: https://your-flowise-server.com
export const FLOWISE_URL = import.meta.env.VITE_FLOWISE_URL || 'http://localhost:3000'

// Your Chatflow ID from FlowiseAI
// Get this from the URL when you open your chatflow in FlowiseAI
// Example: http://localhost:3000/chatflow/abc123 -> chatflow ID is "abc123"
export const CHATFLOW_ID = import.meta.env.VITE_CHATFLOW_ID || ''

// API Endpoint
export const FLOWISE_API_URL = `${FLOWISE_URL}/api/v1/prediction/${CHATFLOW_ID}`

// Optional: Add authentication if your FlowiseAI requires it
export const FLOWISE_AUTH = {
  username: import.meta.env.VITE_FLOWISE_USERNAME || '',
  password: import.meta.env.VITE_FLOWISE_PASSWORD || '',
}

