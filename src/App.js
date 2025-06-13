import React, { useState } from 'react';
import { askJ6 } from './j6Client';

const App = () => {
  const [response, setResponse] = useState('Awaiting prompt...');

  const handleAsk = async () => {
    const answer = await askJ6("Hello J6, are you online?");
    setResponse(answer);
  };

  return (
    <div style={{ background: 'black', color: 'lime', height: '100vh', padding: '2rem' }}>
      <h1>J6 Terminal</h1>
      <button onClick={handleAsk}>Ping J6</button>
      <pre style={{ marginTop: '1rem' }}>{response}</pre>
    </div>
  );
};

export default App;