import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [filteredTodos, setFilteredTodos] = React.useState(todos);

  React.useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

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

  const todoFilter = (status) => {
    if (status === "all") {
      setFilteredTodos(todos);
    } else {
      const newTodos = todos.filter((todo) => todo.status === status);
      setFilteredTodos(newTodos);
      console.log(newTodos);
    }
  };

  return (
    <div className="todo__container">
      <Header />
      <Main
        todos={todos}
        addTask={addTask}
        onClick={todoFilter}
        filteredTodos={filteredTodos}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
