import { useState } from "react";
import { fetchFromApi } from "../utils/api";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, params) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(endpoint, params);
      setIsLoading(false);
      return response;
    } catch (err) {
      setError(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { fetchData, isLoading, error };
};
