import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/common/navbar';
import Projects from './pages/projects/list';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
