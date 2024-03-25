import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />  
      </Routes>
      <Footer />   
    </Router>
  );
}

export default App;
