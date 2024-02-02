import { useEffect, useState } from "react";
import { Todo, http } from "../services/http";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const DB_PORT = import.meta.env.VITE_DB_PORT || 3000;

  useEffect(() => {
    http.get(`http://localhost:${DB_PORT}/todos`).then((todos) => {
      setTodos(todos);
    });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
