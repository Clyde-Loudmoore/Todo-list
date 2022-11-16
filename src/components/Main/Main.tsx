import React from "react";

import { useAppSelector } from "../../hook";

import Form from "../Form";
import Todo from "../Todo";
import Buttons from "../Buttons";

import MainWrapper from "./Main.style";
import { filteringTask } from "../../store/todoSlice";

const Main: React.FC = () => {
  const newTodos = useAppSelector(filteringTask);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }, [newTodos]);

  return (
    <MainWrapper>
      <Form />
      <Buttons />
      <div className="todo__content-wrapper">
        <ul className="todo">
          {newTodos.map((item) => {
            return (
              <Todo
                key={item.id}
                id={item.id}
                task={item.task}
                status={item.status}
              />
            );
          })}
        </ul>
      </div>
    </MainWrapper>
  );
};

export default Main;
