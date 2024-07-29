import { useState } from 'react';

export const useSearchFilters = () => {
  const [sort, setSort] = useState('stars');
  const [query, setQuery] = useState('');
  const perPage = 5;
  const [page, setPage] = useState<number>(1);
  const version = 'latest';

  const handleChangeSearchText = (value: string) => {
    setQuery(value);
  };
  const navigateToPage = (value: number) => {
    setPage(value);
  };

  const reset = () => {
    setSort('stars');
    setQuery('');
    setPage(1);
  };

  return {
    sort,
    query,
    perPage,
    page,
    version,

    navigateToPage,
    handleChangeSearchText,
    reset,
  };
};
