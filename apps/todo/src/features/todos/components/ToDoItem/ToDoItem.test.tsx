import { TodoItemModel } from '@/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('User delete a Todo Item', () => {
  const item: TodoItemModel = {
    id: 'fake-id',
    title: 'fake title',
  };
  const onDelete = jest.fn();
  render(<TodoItem item={item} onDelete={onDelete} />);
  const titleElement = screen.getByText('fake title');
  const deleteElement = screen.getByRole('button');
  fireEvent.click(deleteElement);

  expect(titleElement).toBeDefined();
  expect(onDelete).toHaveBeenCalledTimes(1);
});
