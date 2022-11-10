import React from "react";

import FormWrapper from "./Form.styled";

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
    <FormWrapper onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        className="todo__input"
        placeholder="What needs to be done?"
      ></input>
    </FormWrapper>
  );
};

export default Form;
