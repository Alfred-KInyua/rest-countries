import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Continent from './components/Pages/Continent';
import Country from './components/Pages/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="continent" element={<Continent />} />
          <Route path="country" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
