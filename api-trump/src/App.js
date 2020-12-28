import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [messages, setMessages] = React.useState([]);

  let fetchQuote = () => {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then((res) => res.json()
        .then(data => {
          console.log('fetchquote');
          setMessages([data.message].concat(messages));
        }))
  }

  useEffect(() => {
    console.log('useeffect');
    fetchQuote();
  }, [])

  
  return (
    <div>
      <button onClick={fetchQuote}>Get Quotes</button>
      {messages.map((msg, inx) => <div key={inx}>
        <h4>{msg}</h4>
      </div>)}
    </div>
  );
}

export default App;
