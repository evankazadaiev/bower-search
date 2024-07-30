import { render, screen, fireEvent } from '@testing-library/react';
import FiltersBar from '@/common/components/organisms/FiltersBar';
import { SortBy } from '@/common/hooks';

describe('FiltersBar', () => {
  let handleSearchChangeFn: jest.Mock;
  let handleSortByChangeFn: jest.Mock;

  beforeEach(() => {
    handleSearchChangeFn = jest.fn();
    handleSortByChangeFn = jest.fn();
  });

  it('should call onSearchChange when search input changes', () => {
    render(
      <FiltersBar
        query="test"
        sortBy={SortBy.Stars}
        onSearchChange={handleSearchChangeFn}
        onSortByChange={handleSortByChangeFn}
      />,
    );

    const searchInput = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'test1' } });

    expect(handleSearchChangeFn).toHaveBeenCalledTimes(1);
  });
});
