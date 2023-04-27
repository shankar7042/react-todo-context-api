import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("todos"))
      return JSON.parse(localStorage.getItem("todos"));
    return [];
  });

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => {
  return useContext(TodoContext);
};

export default TodoContextProvider;

export { useTodos };
