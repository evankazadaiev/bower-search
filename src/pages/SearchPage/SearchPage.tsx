import React, { ChangeEvent, useEffect, useState } from 'react';
import ModuleList from '@/components/organisms/ModuleList';
import CustomPagination from '@/components/atoms/Pagination';
import MainLayout from '@/templates/MainLayout';
import SearchBar from '@/components/atoms/SearchBar';
import { useDebounce, useSearchFilters } from '@/hooks';
import { http } from '@/api/http.ts';
import { useMediaQuery, useTheme } from '@mui/material';

const API_URL = `https://libraries.io/api/search`;

const SearchPage: React.FC = () => {
  const { navigateToPage, handleChangeSearchText, ...filters } = useSearchFilters();

  const [modules, setModules] = useState<IModule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const debouncedQuery = useDebounce(filters.query, 500);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        // TODO [kazadaiev] - create axios instance
        const response = await http.get(API_URL, {
          params: {
            per_page: filters.perPage,
            page: filters.page,
            q: filters.query,
            sort: filters.sort,
            version: filters.version,
            api_key: import.meta.env.VITE_APP_LIBRARIES_IO_TOKEN,
          },
        });

        setModules(response.data);
      } catch (e) {
        console.log('Error fetching modules ', e);
        setModules([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debouncedQuery, filters.page]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchText(e.target.value);
  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigateToPage(value);
  };

  return (
    <MainLayout>
      <SearchBar value={filters.query} onSearchChange={handleSearchChange} />
      <ModuleList modules={modules} isLoading={isLoading} />
      {/* Count 10 because Libraries io doesn't support total pagination property */}
      <CustomPagination count={isTablet ? 10 : 5} page={filters.page} onChange={handlePageChange} />
    </MainLayout>
  );
};

export default SearchPage;
