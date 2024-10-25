import { queryOptions, useQuery } from '@tanstack/react-query';
import { QueryConfig } from '../../common';
import { TodoService } from '../services';

export const getAllTodosQueryOptions = () => {
  return queryOptions({
    queryKey: ['todos'],
    queryFn: () => TodoService.fetchAll(),
  });
};

type UseAllTodosOptions = {
  queryConfig?: QueryConfig<typeof getAllTodosQueryOptions>;
};

export const useFetchAllTodos = ({
  queryConfig = {},
}: UseAllTodosOptions = {}) => {
  return useQuery({
    ...getAllTodosQueryOptions(),
    ...queryConfig,
  });
};
