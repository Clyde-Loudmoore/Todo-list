import React, { useState } from "react";

import Form from "../Form/Form";

import "./Main.css";

const Main = () => {
    const [todos, setTodos] = useState([]);
    console.log(todos);

  return (
    <div className="todo__main">
      <Form todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
