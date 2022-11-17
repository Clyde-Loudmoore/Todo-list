import React from 'react';

import { useAppDispatch } from '../../hook';
import { addTask } from '../../store/todoSlice';

import FormWrapper from './Form.styled';

const Form: React.FC = () => {
  const [userInput, setUserInput] = React.useState('');

  const dispatch = useAppDispatch();

  const addTodo = () => dispatch(addTask(userInput));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo();
    setUserInput('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        className="todo__input"
        placeholder="What needs to be done?"
        required
        pattern="^[^\s]+(\s.*)?$"
       />
    </FormWrapper>
  );
};

export default Form;
