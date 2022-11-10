import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import TodoContainer from "./App.styles";

const App = () => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filteredTodos, setFilteredTodos] = React.useState("all");
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoFilter = React.useMemo(() => {
    if (filteredTodos === "complited") {
      return todos.filter((item) => item.status === true);
    }
    if (filteredTodos === "active") {
      return todos.filter((item) => item.status === false);
    }
    return todos;
  }, [filteredTodos, todos]);

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
    <TodoContainer>
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
    </TodoContainer>
  );
};

export default App;
