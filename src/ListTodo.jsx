import Todo from "./Todo";
import { useTodos } from "./context/todo-context";

function ListTodos() {
  const { todos } = useTodos();

  return (
    <div className="listTodos">
      <span
        style={{
          color: "red",
        }}
      >
        *Double click to complete task
      </span>
      {todos.length > 0 &&
        todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}

export default ListTodos;
