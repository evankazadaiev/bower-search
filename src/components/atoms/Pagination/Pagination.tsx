import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ count, page, onChange }) => (
  <Box sx={{ marginTop: 2, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }} spacing={2}>
    <Pagination count={count} page={page} onChange={onChange} />
  </Box>
);

export default CustomPagination;
