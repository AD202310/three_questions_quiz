import { useState, useEffect } from 'react';


const useQuizQuestions = (id) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/quiz/${id}`);
        if (!response.ok) {
          throw new Error(`QuizQuestions: HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setQuizQuestions(json); // Update state with the fetched data
      } catch (error) {
        setError(error); // Handle errors, e.g., network issues, server down
      } finally {
        setIsLoading(false); // Ensure loading is false after fetch completes
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once on mount

  return { quizQuestions, isLoading, error }; // Return the state
};

export default useQuizQuestions;
