import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>{input}</p>
    </div>
  );
}

export default App;