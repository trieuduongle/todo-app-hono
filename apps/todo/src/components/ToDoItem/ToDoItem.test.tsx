import { fireEvent, render, screen } from '@testing-library/react';
import { ToDoItemModel } from '../../models';
import { ToDoItem } from './ToDoItem';

test('User delete a To Do Item', () => {
  const item: ToDoItemModel = {
    id: 'fake-id',
    title: 'fake title',
  };
  const onDelete = jest.fn();
  render(<ToDoItem item={item} onDelete={onDelete} />);
  const titleElement = screen.getByText('fake title');
  const deleteElement = screen.getByRole('button');
  fireEvent.click(deleteElement);

  expect(titleElement).toBeDefined();
  expect(onDelete).toHaveBeenCalledTimes(1);
});
