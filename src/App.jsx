import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Add new task
  function addTodo() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
      editing: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // Delete task
  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  // Complete / Undo task
  function toggleTodo(id) {
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
  }

  // Toggle editing mode
  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              editing: !todo.editing,
            }
          : todo
      )
    );
  }

  // Update task text
  function updateTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
            }
          : todo
      )
    );
  }

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-purple-100 text-black"
      }`}
    >
      <div
        className={`max-w-md mx-auto mt-10 p-6 rounded-xl shadow-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            📝 Todo App
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <TodoInput
          task={task}
          setTask={setTask}
          addTodo={addTodo}
          darkMode={darkMode}
        />

        {todos.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-500">
              No tasks yet. Add your first task!
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                updateTodo={updateTodo}
                darkMode={darkMode}
              />
            ))}
          </ul>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          Total tasks: {todos.length}
        </div>
      </div>
    </div>
  );
}

export default App;