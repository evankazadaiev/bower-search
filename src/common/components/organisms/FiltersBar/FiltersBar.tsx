import React from 'react';
import Box from '@mui/material/Box';
import SearchBar from '@/common/components/atoms/SearchBar';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { SortBy } from '@/common/hooks';

interface IFiltersBarProps {
  query: string;
  sortBy: SortBy;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSortByChange: (event: SelectChangeEvent<string>) => void;
}

const FiltersBar: React.FC<IFiltersBarProps> = ({ query, onSearchChange, onSortByChange, sortBy }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <SearchBar value={query} onSearchChange={onSearchChange} />
      <FormControl aria-label="Sort modules" sx={{ minWidth: 120, ml: 2 }} variant="outlined">
        <InputLabel>Sort By</InputLabel>

        <Select role="listbox" labelId="sort-by-label" value={sortBy} onChange={onSortByChange} label="Sort By">
          <MenuItem value="stars">Stars</MenuItem>
          <MenuItem value="rank">Rank</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltersBar;
