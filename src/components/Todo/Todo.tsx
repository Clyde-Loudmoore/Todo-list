/* eslint-disable no-console */
/* eslint-disable jsx-quotes */
import React from 'react';

import { useAppDispatch } from '../../hook';
import { toggleTask } from '../../store/todoSlice';
import { deleteTask, editTodo } from '../API';

import Delete from './img/delete.png';

import TaskListWrapper from './Todo.styled';

interface ITodoProps {
  _id: string;
  value: string;
  status: boolean;
}

const Todo: React.FC<ITodoProps> = ({ _id, value, status }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInputValue, setUserInputValue] = React.useState(value);

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputValue(e.target.value);
  };

  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
      editTodo(_id, userInputValue, status);
    }
  };

  const handleChangeTask = () => {
    editTodo(_id, userInputValue, !status);
    dispatch(toggleTask(_id));
  };

  return (
    <TaskListWrapper className='todo__list'>
      <div className='todo__list-left'>
        <input
          type='checkbox'
          className='todo__checkbox'
          checked={status}
          onChange={handleChangeTask}
        />
        {isEdit ? (
          <input
            className='todo__editTask'
            value={userInputValue}
            autoFocus
            onChange={onChange}
            onBlur={() => setIsEdit(false)}
            onKeyDown={(e) => handlePressKey(e)}
          />
        ) : (
          <div onDoubleClick={() => setIsEdit(true)}>{userInputValue}</div>
        )}
      </div>
      <div className='todo__list-remove'>
        <button
          className='todo__delete'
          type='button'
          onClick={() => dispatch(deleteTask(_id))}
        >
          <img src={Delete} alt='delete' />
        </button>
      </div>
    </TaskListWrapper>
  );
};

export default Todo;
