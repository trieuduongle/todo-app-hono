import { FormEvent, useEffect, useState } from 'react';
import './App.css';

const BACKEND_URL = 'http://localhost:3000/api';

function App() {
  const [task, setTask] = useState('');
  const [todoItems, setTodoItems] = useState<{ id: string; title: string }[]>(
    []
  );

  useEffect(() => {
    fetch(`${BACKEND_URL}/todo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoItems(data);
      });
  }, []);

  const inputChange = (e: any) => {
    setTask(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      fetch(`${BACKEND_URL}/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: task,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTask('');
          setTodoItems((prev) => [
            ...prev,
            {
              id: data.insertedId,
              title: task,
            },
          ]);
        });
    }
  };

  const handleDelete = (id: any) => {
    fetch(`${BACKEND_URL}/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    });
  };

  return (
    <>
      <h1> To-do List </h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={task}
          onChange={inputChange}
          placeholder='Enter a task'
        />
        <button type='submit'>Add task</button>
      </form>
      <ul>
        {todoItems.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              style={{ marginLeft: '1rem', backgroundColor: 'red' }}
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
