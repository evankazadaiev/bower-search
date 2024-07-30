import { act } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import CustomPagination from '@/common/components/atoms/Pagination';
import { renderRTL } from '@/common/utils/renderRTL.tsx';

describe('CustomPagination', () => {
  let handlePageChangeFn: jest.Mock;

  beforeEach(() => {
    handlePageChangeFn = jest.fn();
  });

  it('calls onChange when a page is clicked', async () => {
    await renderRTL(<CustomPagination count={10} page={1} onChange={handlePageChangeFn} />);

    act(() => {
      const secondPageButton = screen.getByRole('button', { name: /2/i });
      fireEvent.click(secondPageButton);
    });

    expect(handlePageChangeFn).toHaveBeenCalledTimes(1);
  });

  it('renders pagination with correct page selected', () => {
    renderRTL(<CustomPagination count={10} page={5} onChange={handlePageChangeFn} />);

    const activePageButton = screen.getByRole('button', { name: /5/i });
    expect(activePageButton).toHaveAttribute('aria-current', 'true');
  });
});
