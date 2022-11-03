import React, { useState } from "react";

import Buttons from "../Buttons/Buttons";

import "./Form.css";

const Form = ({ todos, setTodos }) => {
  const [userInputField, setUserInputField] = useState("");
  const [filterTaskStatus, setFilterTaskStatus] = useState("");

  const handleChange = (event) => {
    setUserInputField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserInputField("");

    setTodos((todo) => {
      todo.push(userInputField);
      return todo;
    });
  };

  const checkboxValue = (event) => {
    setFilterTaskStatus(event.target.checked);
  }
  console.log(filterTaskStatus);

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__input"
        type="text"
        value={userInputField}
        onChange={handleChange}
        placeholder="What needs to be done?"
      ></input>

      <ul className="todo__tasklist">
        {todos.map((item, i) => {
          return (
            <li className="todo__list" key={i}>
              <div className="todo__checkbox-wrapper">
                <input type="checkbox" className="todo__checkbox" onChange={checkboxValue}/>
              </div>
              {item}
            </li>
          );
        })}
      </ul>

      <Buttons setFilterTaskStatus={setFilterTaskStatus}/>
    </form>
  );
};

export default Form;
