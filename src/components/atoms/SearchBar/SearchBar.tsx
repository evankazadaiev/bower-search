import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

interface ISearchBarProps {
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onSearchChange }) => (
  <TextField
    onChange={onSearchChange}
    value={value}
    fullWidth
    placeholder="Search..."
    variant="outlined"
    aria-label="Search modules"
    sx={{ marginBottom: 2 }}
  />
);

export default SearchBar;
