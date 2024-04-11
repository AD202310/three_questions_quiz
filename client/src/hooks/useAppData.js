import { useState, useEffect } from 'react';

const useAppData = () => {
  const [data, setData] = useState([]); // Initial state is an empty array
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Fetch data from your Express backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json); // Update state with the fetched data
      } catch (error) {
        setError(error); // Handle errors, e.g., network issues, server down
      } finally {
        setIsLoading(false); // Ensure loading is false after fetch completes
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once on mount

  console.log("useAppData: ", data) //************************************** */
  return { data, isLoading, error }; // Return the state
};

export default useAppData;
