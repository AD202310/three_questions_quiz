import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import Quiz from './components/Quiz';
import Answers from './components/Answers';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
