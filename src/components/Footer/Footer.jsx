import React from "react";
import { useSelector } from "react-redux";
import { filteringTask } from "../../store/todoSlice";

import FooterContainer from "./FooterContainer.styled";

const Footer = () => {
  const newTodos = useSelector(filteringTask);

  const countComplitedTask = () => {
    let count = 0;
    newTodos.map((todo) => {
      if (todo.status) {
        return count++;
      } else if (!todo.status) {
        return count;
      }
      return count;
    });
    return count;
  };

  const counterTask = useSelector(() => countComplitedTask(newTodos));

  return (
    <FooterContainer>
      {newTodos.length > 0 && (
        <div className="todo__content-wrapper">
          <p>total active: {newTodos.length - counterTask}</p>
          <p>total complited: {counterTask}</p>
        </div>
      )}
    </FooterContainer>
  );
};

export default Footer;
