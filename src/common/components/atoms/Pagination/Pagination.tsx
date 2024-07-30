import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ count, page, onChange }) => (
  <Box component="div" sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
    <Pagination aria-label="pagination navigation" count={count} page={page} onChange={onChange} />
  </Box>
);

export default CustomPagination;
