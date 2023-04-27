import InputBox from "./InputBox";
import ListTodos from "./ListTodo";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <InputBox />
      <ListTodos />
    </div>
  );
}
