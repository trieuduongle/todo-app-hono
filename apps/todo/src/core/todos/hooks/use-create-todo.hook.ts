import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationConfig } from '../../common';
import { CreateTodoPayload, TodoItemModel } from '../models';
import { TodoService } from '../services';
import { getAllTodosQueryOptions } from './use-fetch-todos.hook';

interface UseCreateTodoOptions {
  mutationConfig?: MutationConfig<typeof TodoService.create>;
  syncLocally?: boolean;
}

export const useCreateTodo = ({
  mutationConfig = {},
  syncLocally = false,
}: UseCreateTodoOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: (payload: CreateTodoPayload) => TodoService.create(payload),
    onSuccess: (...args) => {
      const queryKey = getAllTodosQueryOptions().queryKey;
      if (syncLocally) {
        const insertedId = args[0].insertedId;
        const payload = args[1];
        queryClient.setQueryData<TodoItemModel[]>(queryKey, (old) => [
          ...(old || []),
          { id: insertedId, title: payload.title },
        ]);
      } else {
        queryClient.invalidateQueries({ queryKey });
      }
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
