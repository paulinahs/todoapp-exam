


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

/* delete */
const deleteTodo = (id) => {
setTodos(
todos.filter((todo) => todo.id !== id)
);
};

/* incomplete/complete */
const toggleTodo = (id) => {
setTodos(
todos.map((todo) =>
todo.id === id
? { ...todo, completed: !todo.completed }
: todo
)
);
};

return (
<div className="min-h-screen bg-gray-200 flex justify-center pt-14">
<div className="w-full max-w-5xl bg-gray-100 rounded-2xl p-12">

<h1 className="text-6xl font-bold text-center mb-10">
Todo App
</h1>

<div className="flex gap-4 mb-8">
<input
type="text"
placeholder="Enter a task..."
value={input}
onChange={(e) => setInput(e.target.value)}
className="flex-1 border-2 border-gray-600 rounded-md px-4 py-4 text-xl focus:outline-none"
/>

<button
onClick={addTodo}
className="bg-gray-300 px-8 py-4 rounded-md text-xl hover:bg-gray-400"
>
Add Todo
</button>
</div>

<ul className="space-y-4">
{todos.map((todo) => (
<li
key={todo.id}
className="bg-gray-200 rounded-md p-6 flex justify-between items-center"
>
<span
className={`text-3xl ${
todo.completed
? "line-through text-gray-500"
: ""
}`}
>
{todo.text}
</span>

<div className="flex gap-12 text-2xl">
<button
onClick={() => toggleTodo(todo.id)}
className="hover:text-green-600"
>
{todo.completed
? "Undo"
: "Complete"}
</button>

<button
onClick={() => deleteTodo(todo.id)}
className="hover:text-red-600"
>
Delete
</button>
</div>
</li>
))}
</ul>

</div>
</div>
);
}

export default App;