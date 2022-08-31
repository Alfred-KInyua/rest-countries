import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import ContinentSearch from './components/ContinentSearch';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continent/:title" element={<ContinentSearch />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
