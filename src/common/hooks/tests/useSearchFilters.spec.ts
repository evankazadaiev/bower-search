import { renderHook } from '@testing-library/react-hooks';
import { useSearchFilters, SortBy, SortOrder } from '@/common/hooks/useSearchFilters.ts';
import { act } from 'react';

describe('useSearchFilters hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useSearchFilters());

    const [state] = result.current;

    expect(state.query).toBe('');
    expect(state.perPage).toBe(5);
    expect(state.page).toBe(1);
    expect(state.sortBy).toBe(SortBy.Stars);
    expect(state.order).toBe(SortOrder.Desc);
    expect(state.version).toBe('latest');
  });

  it('should update search query', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;

      actions.handleChangeSearchText('react');
    });

    const [state] = result.current;
    expect(state.query).toBe('react');
  });

  it('should navigate to page', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.navigateToPage(2);
    });

    const [state] = result.current;
    expect(state.page).toBe(2);
  });

  it('should toggle table sorting order', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.toggleSortOrder();
    });

    const [state] = result.current;
    expect(state.order).toBe(SortOrder.Asc);

    act(() => {
      const [, actions] = result.current;
      actions.toggleSortOrder();
    });

    expect(result.current[0].order).toBe(SortOrder.Desc);
  });

  it('should be able to reset to default values', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.handleChangeSearchText('react');
      actions.navigateToPage(2);
      actions.setSortBy(SortBy.Rank);
      actions.toggleSortOrder();
      actions.reset();
    });

    const [state] = result.current;
    expect(state.query).toBe('');
    expect(state.page).toBe(1);
    expect(state.sortBy).toBe(SortBy.Stars);
    expect(state.order).toBe(SortOrder.Desc);
  });

  it('should update sort by value', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.setSortBy(SortBy.Rank);
    });

    const [state] = result.current;
    expect(state.sortBy).toBe(SortBy.Rank);
  });
});
