import { TodoItemModel } from '@/core';

interface TodoItemProps {
  item: TodoItemModel;
  onDelete?(id: string): void;
}

export function TodoItem({ item, onDelete }: TodoItemProps) {
  return (
    <li key={item.id}>
      {item.title}
      {onDelete ? (
        <button
          style={{ marginLeft: '1rem', backgroundColor: 'red' }}
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      ) : null}
    </li>
  );
}
