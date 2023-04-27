import { useState } from "react";
import { useTodos } from "./context/todo-context";

function InputBox() {
  const { todos, setTodos } = useTodos();
  const [input, setInput] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && input.length > 0) {
      const newTodos = [
        { id: todos.length + 1, name: input, done: false },
        ...todos,
      ];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInput("");
    }
  };

  const handleClick = () => {
    if (input.length > 0) {
      const newTodos = [
        { id: todos.length + 1, name: input, done: false },
        ...todos,
      ];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInput("");
    }
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={input}
        placeholder="Add Todo..."
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>Ok</button>
    </div>
  );
}

export default InputBox;
