import React from "react";

import Form from "../Form";
import Todo from "../Todo";
import Buttons from "../Buttons";

import MainWrapper from "./Main.style";

const Main = ({ addTask, onClick, toggleTask, onDelete, todoFilter }) => {
  return (
    <MainWrapper>
      <Form addTask={addTask} />
      <Buttons onClick={onClick} />
      {todoFilter.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={toggleTask}
            onDelete={onDelete}
          />
        );
      })}
    </MainWrapper>
  );
};

export default Main;
