import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useQuizQuestions from './hooks/useQuizQuestions';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import Quiz from './components/Quiz';
import Answers from './components/Answers';


function App() {
  const { quizQuestions, isLoading, error } = useQuizQuestions();
    console.log("App: quizQuestion State: ", quizQuestions);
  const [answers, setAnswers] = useState({});
    console.log("App: answers State: ", answers);  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz quizQuestions={quizQuestions} answers={answers} setAnswers={setAnswers} />} />
        <Route path="/answers" element={<Answers answers={answers} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
