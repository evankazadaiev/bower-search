import { useEffect, useState } from 'react';
import { http } from '@/common/api/http.ts';
import { IFilters, useDebounce } from '@/common/hooks';
import { VITE_APP_LIBRARIES_IO_TOKEN } from '@/common/config';
import { IModule } from '@/common/types';

const API_URL = `https://libraries.io/api/search`;

export const useFetchModules = (filters: IFilters) => {
  const [modules, setModules] = useState<IModule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const debouncedQuery = useDebounce(filters.query, 500);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await http.get(API_URL, {
          params: {
            per_page: filters.perPage,
            page: filters.page,
            q: filters.query,
            sort: filters.sortBy,
            version: filters.version,
            order: filters.order,
            api_key: VITE_APP_LIBRARIES_IO_TOKEN,
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
  }, [debouncedQuery, filters.page, filters.order, filters.sortBy, filters.version, filters.perPage]);

  return { modules, isLoading };
};
