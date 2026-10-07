function TodoInput({
  task,
  setTask,
  addTodo,
  darkMode,
}) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
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

      <button
        onClick={addTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;