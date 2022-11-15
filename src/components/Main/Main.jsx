import React from "react";
import { useSelector } from "react-redux";
import { filteringTask, newTodosArray } from "../../store/todoSlice";

import Form from "../Form";
import Todo from "../Todo";
import Buttons from "../Buttons";

import MainWrapper from "./Main.style";

const Main = () => {
  const newTodos = useSelector(filteringTask);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodosArray));
  }, [newTodosArray]);

  return (
    <MainWrapper>
      <Form />
      <Buttons />
      {newTodos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </MainWrapper>
  );
};

export default Main;
