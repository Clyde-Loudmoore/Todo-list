import React, { useState } from "react";

import Buttons from "../Buttons/Buttons";

import "./Form.css";

const Form = ({ todos, setTodos }) => {
  const [userInputField, setUserInputField] = useState("");
  
  const handleChange = (event) => {
    setUserInputField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserInputField('');

    setTodos((todo) => {
        todo.push(userInputField);
        return todo;
    });
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__input"
        type="text"
        value={userInputField}
        onChange={handleChange}
      ></input>

      <Buttons />

      <ul className="todo__tasklist">
        {todos.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </form>
  );
};

export default Form;
