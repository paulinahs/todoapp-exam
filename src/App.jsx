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

    <-- add delete  -->
  const deleteTodo = (id) => {
  setTodos(
    todos.filter((todo) => todo.id !== id)
  );
};


<-- complete/incomplete  -->
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    )
  );
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
  <span
    style={{
      textDecoration: todo.completed
        ? "line-through"
        : "none",
    }}
  >
    {todo.text}
  </span>

  <button
    onClick={() => toggleTodo(todo.id)}
  >
    {todo.completed
      ? "Undo"
      : "Complete"}
  </button>

  <button
    onClick={() => deleteTodo(todo.id)}
  >
    Delete
  </button>
</li>
    ))}
    </ul>

    </div>

    
  );
}

export default App;