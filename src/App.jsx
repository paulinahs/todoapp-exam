import { useState } from "react";

function App() {
  // Stores the text entered in the input field
  const [task, setTask] = useState("");

  // Stores all todo items in an array
  const [todos, setTodos] = useState([]);

  // Stores dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Adds a new todo item
  function addTodo() {
    // Prevent adding empty tasks
    if (task.trim() === "") return;

    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Unique ID
      text: task, // Task text
      completed: false, // Default status
    };

    // Add todo to array using spread operator
    setTodos([...todos, newTodo]);

    // Clear input field
    setTask("");
  }

  // Deletes a todo item
  function deleteTodo(id) {
    // filter() creates a new array without the selected todo
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  // Toggles completed status
  function toggleTodo(id) {
    // map() creates a new array and updates only the selected todo
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo, // Copy existing object
              completed: !todo.completed, // Reverse completed status
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
      {/* Main App Container */}
      <div
        className={`max-w-md mx-auto mt-10 p-6 rounded-xl shadow-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            📝 Todo App
          </h1>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}

            // Updates task state while typing
            onChange={(e) => setTask(e.target.value)}

            // Allows Enter key to add a task
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}

            className={`flex-1 p-2 border rounded-lg ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />

          {/* Add Todo Button */}
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Conditional Rendering */}
        {/* If no todos exist, show message */}
        {todos.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-500">
              No tasks yet. Add your first task!
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {/* map() loops through the array and renders each todo */}
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                {/* Clicking the task text also toggles completion */}
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer flex-1 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  {todo.text}
                </span>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* Complete / Undo Button */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`px-3 py-1 rounded text-white ${
                      todo.completed
                        ? "bg-yellow-500 hover:bg-yellow-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {todo.completed
                      ? "Undo"
                      : "Complete"}
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total Todo Counter */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Total tasks: {todos.length}
        </div>
      </div>
    </div>
  );
}

export default App;