import React from "react";
import { Paper } from "@mui/material";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";

function SearchContainer({ searchQuery, setSearchQuery, onSearch, isLoading }) {
  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mb: 4,
      }}
    >
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        onEnterPress={handleSubmit}
      />
      <SearchButton onClick={handleSubmit} isLoading={isLoading} />
    </Paper>
  );
}

export default SearchContainer;
