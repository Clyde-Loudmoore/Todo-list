import React from "react";

import "./Form.css";

const Form = ({ addTask }) => {
  const [userInput, setUserInput] = React.useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        className="todo__input"
        placeholder="What needs to be done?"
      ></input>
    </form>
  );
};

export default Form;
