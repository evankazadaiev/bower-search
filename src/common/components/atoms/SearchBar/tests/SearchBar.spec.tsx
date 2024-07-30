import { fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/common/components/atoms/SearchBar';
import { renderRTL } from '@/common/utils/renderRTL.tsx';

describe('SearchBar', () => {
  let handleSearchChangeFn: jest.Mock;

  beforeEach(() => {
    handleSearchChangeFn = jest.fn();
  });

  it('renders a search bar with the passed value', async () => {
    renderRTL(<SearchBar value="test" onSearchChange={handleSearchChangeFn} />);
    const inputElement = await screen.getByPlaceholderText('Search...');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('test');
  });

  it('calls onSearchChange when input value changes', async () => {
    renderRTL(<SearchBar value="" onSearchChange={handleSearchChangeFn} />);

    const inputElement = await screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'testtest' } });

    expect(handleSearchChangeFn).toHaveBeenCalledTimes(1);
  });
});
