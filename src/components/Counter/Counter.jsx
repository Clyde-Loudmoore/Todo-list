import { useMemo } from "react";

import "./Counter.css";

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

const Counter = (props) => {
  const counterTask = useMemo(
    () => countComplitedTask(props.todos),
    [props.todos]
  );

  return (
    <div className="todo__counter-wrapper">
      {props.todos.length > 0 && (
        <div className="todo__counter">
          <p>total active: {props.todos.length - counterTask}</p>
          <p>total complited: {counterTask}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
