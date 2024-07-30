import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useFetchModules } from '@/modules-search/hooks/useFetchModules';
import { IFilters } from '@/common/hooks';
import { moduleMock } from '@/common/mocks';
import { http } from '@/common/api/http.ts';

const API_URL = 'https://libraries.io/api/search';

jest.mock('@/common/config', () => ({
  VITE_APP_LIBRARIES_IO_TOKEN: 'test-token',
}));

describe('useFetchModules', () => {
  let mockAdapter: MockAdapter;

  const mockFilters: IFilters = {
    query: 'react',
    perPage: 5,
    page: 1,
    sortBy: 'stars',
    version: 'latest',
    order: 'desc',
  } as IFilters;

  beforeEach(() => {
    mockAdapter = new MockAdapter(http);
  });

  afterEach(() => {
    mockAdapter.restore();
  });

  it('should fetch modules successfully and return request loading state', async () => {
    mockAdapter.onGet(API_URL).reply(200, [moduleMock]);

    const { result, waitForNextUpdate } = renderHook(() => useFetchModules(mockFilters));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.modules).toHaveLength(1);
    expect(result.current.modules[0].name).toBe(moduleMock.name);
  });

  it('should not throw on error and return empty array', async () => {
    mockAdapter.onGet(API_URL).reply(500);

    const { result, waitForNextUpdate } = renderHook(() => useFetchModules(mockFilters));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.modules).toHaveLength(0);
  });
});
