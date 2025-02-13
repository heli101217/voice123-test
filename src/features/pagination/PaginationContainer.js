import React from "react";
import { Box, Button } from "@mui/material";

function PaginationContainer({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pages = [];
    console.log(totalPages, currentPage);
    const maxVisiblePages = 10;
    let startPage = Math.max(1, currentPage - 4);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          variant={currentPage === i ? "contained" : "text"}
          sx={{
            minWidth: "32px",
            height: "32px",
            mx: 0.5,
            p: 0,
            color: currentPage === i ? "white" : "primary.main",
          }}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 4,
        gap: 1,
      }}
    >
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ textTransform: "none" }}
      >
        Previous
      </Button>
      {renderPageNumbers()}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{ textTransform: "none" }}
      >
        Next
      </Button>
    </Box>
  );
}

export default PaginationContainer;
