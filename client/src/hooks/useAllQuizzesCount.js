import { useState, useEffect } from 'react';

const useAllQuizzesCount = () => {
  const [quizzesCount, setQuizzesCount] = useState([1]);  
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/quizzes_count');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setQuizzesCount(Math.floor(Math.random() * json[0].count)); // Update state with the fetched data
      } catch (error) {
        setError(error); // Handle errors, e.g., network issues, server down
      } finally {
        setIsLoading(false); // Ensure loading is false after fetch completes
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once on mount

  return { quizzesCount, isLoading, error }; // Return the state
};

export default useAllQuizzesCount;
