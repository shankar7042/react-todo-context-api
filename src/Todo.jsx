import { useState } from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useTodos } from "./context/todo-context";

function Todo({ todo }) {
  const { todos, setTodos } = useTodos();

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleEditInput = (e) => {
    const t = todos.find((todo) => todo.id === editId);
    if (e.key === "Enter") {
      t.name = editInput;
      const newTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return t;
        }
        return todo;
      });
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setEditId(null);
      setEditInput("");
    }
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditId(id);
    setEditInput(todo.name);
  };

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDblClick = () => {
    handleCheck(todo.id);
  };

  return (
    <div className="todo" key={todo.id}>
      <div className="task" onDoubleClick={handleDblClick}>
        <CheckBox onCheck={() => handleCheck(todo.id)} checked={todo.done} />
        {editId !== todo.id ? (
          <span
            style={{
              textDecoration: todo.done && "line-through",
            }}
          >
            {todo.name[0].toUpperCase() + todo.name.substring(1)}
          </span>
        ) : (
          <input
            className="editInputBox"
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            onKeyUp={handleEditInput}
            autoFocus
          />
        )}
      </div>
      <div className="actionBtns">
        <Button
          className="edit"
          onClick={() => handleEdit(todo.id)}
          disabled={todo.done}
        >
          Edit
        </Button>
        <Button className="delete" onClick={() => handleDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;
