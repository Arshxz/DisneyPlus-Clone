import React from 'react';
import './App.css'; // Importing the CSS file.
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
