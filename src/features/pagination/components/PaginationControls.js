import React from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={3}
      mb={3}
      component="nav"
      aria-label="pagination navigation"
    >
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
      />
    </Box>
  );
}

export default PaginationControls;
