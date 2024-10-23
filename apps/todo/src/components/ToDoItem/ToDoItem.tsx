import { ToDoItemModel } from '../..//models';

interface ToDoItemProps {
  item: ToDoItemModel;
  onDelete?(id: string): void;
}

export function ToDoItem({ item, onDelete }: ToDoItemProps) {
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
