import React, { useState } from "react";
import { Container } from "@mui/material";
import Layout from "./shared/components/Layout";
import SearchContainer from "./features/search/SearchContainer";
import VoiceActorList from "./features/voiceActor/VoiceActorList";
import PaginationContainer from "./features/pagination/PaginationContainer";
import { useSearch } from "./features/search/hooks/useSearch";
import { usePagination } from "./features/pagination/hooks/usePagination";
import LoadingSpinner from "./shared/components/LoadingSpinner";

function App() {
  const { currentPage, totalPages, setTotalPages, handlePageChange } =
    usePagination();
  const {
    searchQuery,
    setSearchQuery,
    handleSearch,
    isLoading,
    searchResults,
    error,
  } = useSearch(setTotalPages);

  const handleSearchSubmit = async () => {
    await handleSearch(1);
    handlePageChange(1);
  };

  const handlePageChangeSubmit = async (page) => {
    handlePageChange(page);
    await handleSearch(page);
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <SearchContainer
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchSubmit}
          isLoading={isLoading}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <VoiceActorList actors={searchResults} />
            <PaginationContainer
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChangeSubmit}
            />
          </>
        )}
      </Container>
    </Layout>
  );
}

export default App;
