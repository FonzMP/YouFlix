import React from 'react';
import logo from './logo.svg';
import Home from './shared/home'
import './App.css';

function App() {
  console.log('process ', process.env.REACT_APP_YOUTUBE_KEY)
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
