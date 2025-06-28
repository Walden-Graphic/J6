import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import { askOpenai } from './api/askOpenai';

const App = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);

  const handleSend = async (userInput) => {
    const newMessages = [
      ...messages,
      { role: 'user', content: userInput }
    ];
    setMessages(newMessages);

    const aiResponse = await askOpenai(newMessages);

    setMessages([
      ...newMessages,
      { role: 'assistant', content: aiResponse }
    ]);
  };

  return (
    <div>
      <h1>J6 AI Chat</h1>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
};

export default App;