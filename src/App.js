
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contanct from './components/Contanct';
import Service from './components/Service';





function App() {


  return <>
  <Router>
    <Navbar />
    <Routes>
     <Route exact path='/' element={<Home />}/>
    </Routes>
  </Router>
  </>
}

export default App;

