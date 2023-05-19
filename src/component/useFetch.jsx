import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setCountryData(data);
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]),
    [url];

  return { isLoading, countryData };
};
