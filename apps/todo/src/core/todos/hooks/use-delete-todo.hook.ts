import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationConfig } from '../../common';
import { TodoItemModel } from '../models';
import { TodoService } from '../services';
import { getAllTodosQueryOptions } from './use-fetch-todos.hook';

interface UseDeleteTodoOptions {
  mutationConfig?: MutationConfig<typeof TodoService.delete>;
  syncLocally?: boolean;
}

export const useDeleteTodo = ({
  mutationConfig = {},
  syncLocally = false,
}: UseDeleteTodoOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: (id: string) => TodoService.delete(id),
    onSuccess: (...args) => {
      const queryKey = getAllTodosQueryOptions().queryKey;
      if (syncLocally) {
        const toBeDeletedId = args[1];
        queryClient.setQueryData<TodoItemModel[]>(queryKey, (old) =>
          (old || []).filter((item) => item.id !== toBeDeletedId)
        );
      } else {
        queryClient.invalidateQueries({ queryKey });
      }
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
