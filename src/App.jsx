import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>
    <-- add to do functionality -->
    <ul>
    {todos.map((todo) => (
    <li key={todo.id}>
{todo.text}
    </li>
    ))}
    </ul>

    </div>

    
  );
}

export default App;