import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import { Counter } from './components/Counter';
import socket from './socket'
import './assets/App.css';
import {
  setAmount
} from './container/counterSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected")
    });
    socket.on('updateAmount', (amount) => {
      dispatch(setAmount(amount));
      setLoad(false)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {load ? "" :
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
          </div>}
      </header>
    </div>
  );
}

export default App;
