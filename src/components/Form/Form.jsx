import React from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";

import FormWrapper from "./Form.styled";

const Form = () => {
  const [userInput, setUserInput] = React.useState("");

  const dispatch = useDispatch();

  const addTodo = () => dispatch(addTask(userInput));

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput);
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
