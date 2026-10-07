function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
  updateTodo,
  darkMode,
}) {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg ${
        darkMode ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      {todo.editing ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) =>
            updateTodo(todo.id, e.target.value)
          }
          className="flex-1 p-2 mr-2 border rounded"
        />
      ) : (
        <span
          onClick={() =>
            toggleTodo(todo.id)
          }
          className={`cursor-pointer flex-1 ${
            todo.completed
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() =>
            toggleTodo(todo.id)
          }
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

        <button
          onClick={() =>
            editTodo(todo.id)
          }
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          {todo.editing ? "Save" : "Edit"}
        </button>

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;