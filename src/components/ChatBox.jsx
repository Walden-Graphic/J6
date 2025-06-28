import React, { useState } from 'react';

const ChatBox = ({ messages, onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '0.5rem 0' }}>
            <strong>{msg.role === 'user' ? 'You' : msg.role === 'assistant' ? 'J6' : 'System'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </div>
  );
};

export default ChatBox;