import { useState } from 'react';

export enum SortBy {
  Stars = 'stars',
  Rank = 'rank',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export interface IFilters {
  sortBy: SortBy;
  query: string;
  perPage: number;
  page: number;
  version: string;
  order: SortOrder;
}

export interface IActions {
  toggleSortOrder: () => void;
  navigateToPage: (value: number) => void;
  handleChangeSearchText: (value: string) => void;
  setSortBy: (value: SortBy) => void;
  reset: () => void;
}

export const useSearchFilters = (): [IFilters, IActions] => {
  const [query, setQuery] = useState('');
  const perPage = 5;
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Stars);
  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const version = 'latest';

  const handleChangeSearchText = (value: string) => {
    setQuery(value);
  };
  const navigateToPage = (value: number) => {
    setPage(value);
  };

  const toggleSortOrder = () => {
    setOrder((prev) => (prev === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc));
  };

  const reset = () => {
    setSortBy(SortBy.Stars);
    setOrder(SortOrder.Desc);
    setQuery('');
    setPage(1);
  };

  return [
    {
      sortBy,
      query,
      perPage,
      page,
      version,
      order,
    },
    {
      toggleSortOrder,
      navigateToPage,
      handleChangeSearchText,
      setSortBy,
      reset,
    },
  ];
};
