import { renderHook, act } from '@testing-library/react-hooks';
import { useSearchFilters, SortBy, SortOrder } from '@/hooks/useSearchFilters.ts';

describe('useSearchFilters', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useSearchFilters());

    const [state] = result.current;

    expect(state.query).toBe('');
    expect(state.perPage).toBe(5);
    expect(state.page).toBe(1);
    expect(state.sortBy).toBe(SortBy.Stars);
    expect(state.order).toBe(SortOrder.Desc);
    expect(state.version).toBe('latest');
  });

  test('should update query', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.handleChangeSearchText('react');
    });

    const [state] = result.current;
    expect(state.query).toBe('react');
  });

  test('should navigate to page', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.navigateToPage(2);
    });

    const [state] = result.current;
    expect(state.page).toBe(2);
  });

  test('should toggle sort order', () => {
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

  test('should reset to default values', () => {
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

  test('should update sort by', () => {
    const { result } = renderHook(() => useSearchFilters());

    act(() => {
      const [, actions] = result.current;
      actions.setSortBy(SortBy.Rank);
    });

    const [state] = result.current;
    expect(state.sortBy).toBe(SortBy.Rank);
  });
});
