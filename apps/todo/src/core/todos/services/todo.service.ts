import { api } from '../../common';
import { CreateTodoPayload, TodoItemModel } from '../models';

export const TodoService = {
  fetchAll: () => api.fetch<TodoItemModel[]>('todos'),
  create: (todo: CreateTodoPayload) =>
    api.post<{ insertedId: string }>('todos', todo),
  delete: (id: string) => api.delete(`todos/${id}`),
};
