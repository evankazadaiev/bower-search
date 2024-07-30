import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from '@/common/hooks/useDebounce.ts';

jest.useFakeTimers();

describe('useDebounce hook', () => {
  it('should debounce value changes by the specified delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'test', delay: 300 },
    });

    expect(result.current).toBe('test');

    rerender({ value: 'test-upd', delay: 300 });

    expect(result.current).toBe('test');

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe('test-upd');
  });
});
