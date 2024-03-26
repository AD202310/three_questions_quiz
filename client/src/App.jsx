import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Dynamic imports for components using React.lazy
const Homepage = React.lazy(() => import('./components/Homepage'));
const LoginPage = React.lazy(() => import('./components/LoginPage'));
const Signup = React.lazy(() => import('./components/Signup'));
const Quiz = React.lazy(() => import('./components/Quiz'));
const Answers = React.lazy(() => import('./components/Answers'));

function App() {
  return (
    <Router>
      <Nav /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </Suspense>
      <Footer />   
    </Router>
  );
}

export default App;
