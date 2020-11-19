import React, { useEffect } from 'react';
import logo from './assets/logo.svg';
import { Counter } from './components/Counter';
import socket from './socket'
import './assets/App.css';

function App() {

  useEffect(() => {
   
    socket.on('connect', () => {
      console.log("connected")
    });
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
