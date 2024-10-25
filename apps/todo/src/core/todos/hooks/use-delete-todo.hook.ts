import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationConfig } from '../../common';
import { TodoService } from '../services';

interface UseDeleteTodoOptions {
  mutationConfig?: MutationConfig<typeof TodoService.delete>;
}

export const useDeleteTodo = ({
  mutationConfig = {},
}: UseDeleteTodoOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: (id: string) => TodoService.delete(id),
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
