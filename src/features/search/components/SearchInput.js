import React from "react";
import { InputBase } from "@mui/material";

function SearchInput({ value, onChange, onEnterPress }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterPress();
    }
  };

  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search voice actors..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default SearchInput;
