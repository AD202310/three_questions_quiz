import { useState, useEffect } from 'react';
import useAllQuizzesCount from './useAllQuizzesCount';

const useQuizQuestions = () => {
  const { quizzesCount } = useAllQuizzesCount(); // Move this inside the hook
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/quiz/${quizzesCount}`);
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

    // fetchData is dependent on quizzesCount, so it should be included in the useEffect dependency array
    if (quizzesCount !== undefined) {
      fetchData();
    }
  }, [quizzesCount]); // Include quizzesCount in the dependency array to refetch when it changes

  return { quizQuestions, isLoading, error }; // Return the state
};

export default useQuizQuestions;
