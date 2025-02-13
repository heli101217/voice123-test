import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchButton({ onClick, isLoading }) {
  return (
    <IconButton onClick={onClick} disabled={isLoading} sx={{ p: "10px" }}>
      <SearchIcon />
    </IconButton>
  );
}

export default SearchButton;
