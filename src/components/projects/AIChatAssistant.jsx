import { useState, useRef, useEffect } from 'react'
import { FaArrowLeft, FaPaperPlane, FaRobot, FaUser, FaExclamationTriangle } from 'react-icons/fa'
import { FLOWISE_API_URL, FLOWISE_AUTH, CHATFLOW_ID } from '../../config/flowiseConfig'
import './AIChatAssistant.css'

const AIChatAssistant = ({ isWidget = false }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: CHATFLOW_ID 
        ? "Hello! I'm your AI assistant powered by FlowiseAI. How can I help you today?"
        : "Hello! I'm your AI assistant. Please configure FlowiseAI to enable AI responses. See FLOWISE_SETUP_GUIDE.md for instructions.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Fallback response generator (used when FlowiseAI is not configured)
  const generateFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Nice to meet you! Please configure FlowiseAI to enable full AI capabilities. Check FLOWISE_SETUP_GUIDE.md for setup instructions."
    }
    if (lowerMessage.includes('help')) {
      return "I'm here to help! To enable AI responses, please set up FlowiseAI. See the setup guide for instructions."
    }

    return "FlowiseAI is not configured. Please set up FlowiseAI and add your Chatflow ID to enable AI responses. See FLOWISE_SETUP_GUIDE.md for instructions."
  }

  // Call FlowiseAI API
  const callFlowiseAPI = async (userMessage, chatHistory) => {
    try {
      const requestBody = {
        question: userMessage,
        history: chatHistory.map(msg => ({
          type: msg.sender === 'user' ? 'userMessage' : 'apiMessage',
          message: msg.text,
        })),
      }

      // Add authentication if configured
      const headers = {
        'Content-Type': 'application/json',
      }

      if (FLOWISE_AUTH.username && FLOWISE_AUTH.password) {
        const auth = btoa(`${FLOWISE_AUTH.username}:${FLOWISE_AUTH.password}`)
        headers['Authorization'] = `Basic ${auth}`
      }

      const response = await fetch(FLOWISE_API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error(`FlowiseAI API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      
      // FlowiseAI response format may vary, handle different response structures
      if (data.text) {
        return data.text
      } else if (data.response) {
        return data.response
      } else if (typeof data === 'string') {
        return data
      } else {
        return JSON.stringify(data)
      }
    } catch (error) {
      console.error('FlowiseAI API Error:', error)
      throw error
    }
  }

  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    setError(null)

    try {
      let aiResponseText

      // Use FlowiseAI if configured, otherwise use fallback
      if (CHATFLOW_ID && FLOWISE_API_URL) {
        try {
          // Prepare chat history (last 10 messages for context)
          const chatHistory = messages.slice(-10)
          aiResponseText = await callFlowiseAPI(userMessage.text, chatHistory)
          setIsConnected(true)
        } catch (apiError) {
          console.error('FlowiseAI error:', apiError)
          // Fallback to default response if API fails
          aiResponseText = generateFallbackResponse(userMessage.text)
          setError('FlowiseAI connection failed. Using fallback mode.')
          setIsConnected(false)
        }
      } else {
        // Use fallback if FlowiseAI is not configured
        aiResponseText = generateFallbackResponse(userMessage.text)
        setIsConnected(false)
      }

      const aiResponse = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      console.error('Error sending message:', error)
      setError('Failed to get response. Please check your FlowiseAI configuration.')
      
      const errorResponse = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please check your FlowiseAI setup and try again.',
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Don't render back button and header in widget mode
  if (isWidget) {
    return (
      <div className="ai-chat">
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-avatar">
                {message.sender === 'user' ? <FaUser /> : <FaRobot />}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message ai-message">
              <div className="message-avatar">
                <FaRobot />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="error-message">
            <FaExclamationTriangle /> {error}
          </div>
        )}

        {!CHATFLOW_ID && (
          <div className="config-warning">
            <FaExclamationTriangle />
            <div>
              <strong>FlowiseAI not configured</strong>
              <p>Please set up FlowiseAI and add your Chatflow ID to enable AI responses. See FLOWISE_SETUP_GUIDE.md for instructions.</p>
            </div>
          </div>
        )}

        <div className="chat-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chat-input"
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            className="send-button"
            disabled={!inputValue.trim() || isTyping}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="ai-chat-page">
      <div className="ai-chat-container">
        <a href="#/" className="back-button">
          <FaArrowLeft /> Back to Projects
        </a>
        <div className="ai-chat">
          <div className="chat-header">
            <div className="chat-header-content">
              <FaRobot className="chat-header-icon" />
              <div>
                <h1>AI Chat Assistant</h1>
                <p className="chat-status">
                  {isConnected ? '🟢 Connected to FlowiseAI' : CHATFLOW_ID ? '🟡 Connecting...' : '⚪ FlowiseAI not configured'}
                </p>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? <FaUser /> : <FaRobot />}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <FaRobot />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <div className="error-message">
              <FaExclamationTriangle /> {error}
            </div>
          )}

          {!CHATFLOW_ID && (
            <div className="config-warning">
              <FaExclamationTriangle />
              <div>
                <strong>FlowiseAI not configured</strong>
                <p>Please set up FlowiseAI and add your Chatflow ID to enable AI responses. See FLOWISE_SETUP_GUIDE.md for instructions.</p>
              </div>
            </div>
          )}

          <div className="chat-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chat-input"
              disabled={isTyping}
            />
            <button
              onClick={sendMessage}
              className="send-button"
              disabled={!inputValue.trim() || isTyping}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIChatAssistant

