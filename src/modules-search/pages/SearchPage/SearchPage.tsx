import React, { ChangeEvent } from 'react';
import ModuleList from '@/modules-search/components/organisms/ModuleList';
import CustomPagination from '@/common/components/atoms/Pagination';
import MainLayout from '@/common/templates/MainLayout';
import { SortBy, useSearchFilters } from '@/common/hooks';
import { useMediaQuery, useTheme } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import FiltersBar from '@/common/components/organisms/FiltersBar';
import { useFetchModules } from '@/modules-search/hooks';

const SearchPage: React.FC = () => {
  const [filters, { navigateToPage, handleChangeSearchText, toggleSortOrder, setSortBy }] = useSearchFilters();
  const { modules, isLoading } = useFetchModules(filters);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchText(e.target.value);
  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigateToPage(value);
  };

  const handleSortByChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value as SortBy);
  };

  return (
    <MainLayout>
      <FiltersBar
        query={filters.query}
        onSearchChange={handleSearchChange}
        sortBy={filters.sortBy}
        onSortByChange={handleSortByChange}
      />

      <ModuleList
        order={filters.order}
        onSortingOrderChange={toggleSortOrder}
        modules={modules}
        isLoading={isLoading}
      />
      {/* Count 10 because Libraries io doesn't support total pagination property */}
      <CustomPagination count={isTablet ? 10 : 5} page={filters.page} onChange={handlePageChange} />
    </MainLayout>
  );
};

export default SearchPage;
