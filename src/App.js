import React from 'react';
import './App.css'; // Importing the CSS file.

// Import Components
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div >
  );
}

export default App;
