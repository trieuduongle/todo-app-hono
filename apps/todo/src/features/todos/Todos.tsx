import { useCreateTodo, useDeleteTodo, useFetchAllTodos } from '@/core';
import { FormEvent, useState } from 'react';
import { TodoItem } from './components';

export const ToDos = () => {
  const [task, setTask] = useState('');
  const { data: todoItems } = useFetchAllTodos();
  const createTodoMutation = useCreateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const inputChange = (e: any) => {
    setTask(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      createTodoMutation.mutate(
        { title: task },
        { onSuccess: () => setTask('') }
      );
    }
  };

  const handleDelete = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={task}
          onChange={inputChange}
          placeholder='Enter a task'
        />
        <button type='submit'>Add task</button>
      </form>
      {todoItems ? (
        <ul>
          {todoItems.map((todo) => (
            <TodoItem key={todo.id} item={todo} onDelete={handleDelete} />
          ))}
        </ul>
      ) : null}
    </>
  );
};
