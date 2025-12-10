import { useState } from 'react'
import { FaRobot, FaTimes, FaMinus } from 'react-icons/fa'
import { CHATFLOW_ID } from '../config/flowiseConfig'
import AIChatAssistant from './projects/AIChatAssistant'
import './ChatWidget.css'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button className="chat-widget-button" onClick={toggleChat} aria-label="Open chat">
          <FaRobot className="chat-widget-icon" />
          <span className="chat-widget-pulse"></span>
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className={`chat-widget-container ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-widget-header">
            <div className="chat-widget-header-content">
              <FaRobot className="chat-widget-header-icon" />
              <div>
                <h3>AI Chat Assistant</h3>
                <p className="chat-widget-status">
                  {CHATFLOW_ID ? '🟢 FlowiseAI Ready' : '⚪ FlowiseAI not configured'}
                </p>
              </div>
            </div>
            <div className="chat-widget-controls">
              <button
                onClick={minimizeChat}
                className="chat-widget-control-button"
                aria-label="Minimize chat"
                title="Minimize"
              >
                <FaMinus />
              </button>
              <button
                onClick={closeChat}
                className="chat-widget-control-button"
                aria-label="Close chat"
                title="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {!isMinimized && (
            <div className="chat-widget-content">
              <AIChatAssistant isWidget={true} />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ChatWidget

