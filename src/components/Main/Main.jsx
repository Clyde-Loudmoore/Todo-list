import React from "react";

import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import Buttons from "../Buttons/Buttons";

import "./Main.css";

const Main = ({
  addTask,
  onClick,
  filteredTodos,
  toggleTask,
  onDelete,
  setTodos,
}) => {
  return (
    <main className="todo__main">
      <Form addTask={addTask} />
      <Buttons onClick={onClick} />
      {filteredTodos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={toggleTask}
            onDelete={onDelete}
            setTodos={setTodos}
          />
        );
      })}
    </main>
  );
};

export default Main;
