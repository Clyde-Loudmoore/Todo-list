import React from "react";
import { useSelector } from "react-redux";

import Form from "../Form";
import Todo from "../Todo";
import Buttons from "../Buttons";

import MainWrapper from "./Main.style";

const Main = ({ addTask, onClick, onDelete }) => {
  
  const todos = useSelector((state) => state.todos.todos);

  return (
    <MainWrapper>
      <Form addTask={addTask} />
      <Buttons onClick={onClick} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onDelete={onDelete} />;
      })}
    </MainWrapper>
  );
};

export default Main;
