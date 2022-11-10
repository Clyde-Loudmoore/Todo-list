import React from "react";

import FooterContainer from "./FooterContainer.styled";

const countComplitedTask = (todos) => {
  let count = 0;
  todos.map((todo) => {
    if (todo.status) {
      return count++;
    } else if (!todo.status) {
      return count;
    }
  });
  return count;
};

const Footer = (props) => {
  const counterTask = React.useMemo(
    () => countComplitedTask(props.todos),
    [props.todos]
  );

  return (
    <FooterContainer>
      {props.todos.length > 0 && (
        <div className="todo__content-wrapper">
          <p>total active: {props.todos.length - counterTask}</p>
          <p>total complited: {counterTask}</p>
        </div>
      )}
    </FooterContainer>
  );
};

export default Footer;
