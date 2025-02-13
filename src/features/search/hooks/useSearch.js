import { useState } from "react";
import { searchVoiceActors } from "../../../shared/utils/api";
import { highlightSearchText } from "../../../shared/utils/helpers";

export const useSearch = (onUpdateTotalPages) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (page = 1) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await searchVoiceActors(searchQuery, page);

      const processedResults = response.data.providers.map((actor) => ({
        ...actor,
        highlightedText: highlightSearchText(actor, searchQuery),
      }));

      setSearchResults(processedResults);
      const totalPages = parseInt(response.headers["x-list-total-pages"]);
      onUpdateTotalPages(totalPages);
    } catch (err) {
      setError(err.message || "An error occurred while searching");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
    isLoading,
    searchResults,
    error,
  };
};
