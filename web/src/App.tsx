import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/common/navbar';
import Projects from './pages/projects/list';
import RegisterUser from './pages/users/new';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/register' element={<RegisterUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
