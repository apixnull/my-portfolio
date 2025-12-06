import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chat.css';

const FlowiseChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Flowise API query function (exact code from Flowise)
  const query = async (data) => {
    const response = await fetch(
      "https://cloud.flowiseai.com/api/v1/prediction/600282e7-3991-47a1-a612-d5a05393437a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const result = await response.json();
    return result;
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await query({ question: input });
      
      // Flowise returns: { text: "answer" }
      const answer = response.text || response.answer || response.response || 'No response';
      
      setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to get response');
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'chat-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
        {!isOpen && <span className="chat-badge">Chat</span>}
      </button>

      {/* Floating Chat Widget */}
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-header-content">
              <h3>Chat with Apix</h3>
              <p>Ask me about my portfolio!</p>
            </div>
            <button 
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>👋 Hi! I'm Apix's AI assistant.</p>
                <p>Ask me about:</p>
                <ul>
                  <li>Jasper's background and education</li>
                  <li>His projects (RentEase, Hotel Reservation)</li>
                  <li>His skills and technologies</li>
                </ul>
                <p>Try: "Tell me about RentEase" or "What skills does Jasper have?"</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.role}`}>
                  <div className="message-content">
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            
            {loading && (
              <div className="message assistant">
                <div className="message-content loading">Thinking...</div>
              </div>
            )}
            
            {error && (
              <div className="message error">
                <div className="message-content">Error: {error}</div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              autoFocus
            />
            <button 
              onClick={handleSend} 
              disabled={loading || !input.trim()}
              className="send-btn"
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FlowiseChat;

