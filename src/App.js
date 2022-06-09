import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WebServices from './components/pages/WebServices';
import DigitalServices from './components/pages/DigitalServices';
import SignUp from './components/pages/SignUp';

function App() {
  return (
  <>
  <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />        
          <Route path='/web-services' element={<WebServices />} />
          <Route path='/digital-services' element={<DigitalServices />} />
          <Route path='/sign-up' element={<SignUp />} />      
        </Routes>
      </Router>
  </>
  );
}

export default App;
