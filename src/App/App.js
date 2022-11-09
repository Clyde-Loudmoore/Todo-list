import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filteredTodos, setFilteredTodos] = React.useState("all");

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoFilter = React.useMemo(() => {
    return todos.filter((todo) => {
      if (filteredTodos === "true") {
        return setFilteredTodos({ ...todo, status: true });
      } else if (filteredTodos === "false") {
        return setFilteredTodos({ ...todo, status: false });
      } else if (filteredTodos === "all") {
        return setFilteredTodos({ ...todo });
      }
      return todo;
    });
  }, [filteredTodos, todos]);

  console.log(todoFilter);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = { id: uuidv4(), task: userInput, status: false };
      setTodos([...todos, newItem]);
    }
  };

  const toggleTask = (id) => {
    const todoStatus = [
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
      ),
    ];
    setTodos(todoStatus);
  };

  const removeTask = (id) => {
    const filteredTodo = [...todos.filter((todo) => todo.id !== id)];
    setTodos(filteredTodo);
  };

  return (
    <div className="todo__container">
      <Header />
      <Main
        todos={todos}
        todoFilter={todoFilter}
        addTask={addTask}
        onClick={setFilteredTodos}
        toggleTask={toggleTask}
        onDelete={removeTask}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
