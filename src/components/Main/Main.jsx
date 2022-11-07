import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import Buttons from "../Buttons/Buttons";
import Counter from "../Counter/Counter";

import "./Main.css";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  console.log(todos);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = { id: uuidv4(), task: userInput, status: false };
      setTodos([...todos, newItem]);
    }
  };

  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
      ),
    ]);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const todoFilter = (status) => {
    if (status === "all") {
      setFilteredTodos(todos);
    } else {
      let newTodos = todos.filter((todo) => todo.status === status);
      setFilteredTodos(newTodos);
      console.log(newTodos);
    }
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <main className="todo__main">
      <Form addTask={addTask} />
      <Buttons todoFilter={todoFilter} />
      {filteredTodos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        );
      })}
      <Counter todos={todos}/>
    </main>
  );
};

export default Main;
