/* eslint-disable jsx-quotes */
import React from 'react';

import { useAppDispatch } from '../../hook';
import { toggleTask } from '../../store/todoSlice';
import { deleteTodo } from '../API/API';

import Delete from './img/delete.png';

import TaskListWrapper from './Todo.styled';

interface ITodoProps {
  _id: string;
  task: string;
  status: boolean;
}

const Todo: React.FC<ITodoProps> = ({ _id, task, status }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInputValue, setUserInputValue] = React.useState(task);

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputValue(e.target.value);
  };

  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
    }
  };

  return (
    <TaskListWrapper className='todo__list'>
      <div className='todo__list-left'>
        <input
          type='checkbox'
          className='todo__checkbox'
          checked={status}
          onChange={() => dispatch(toggleTask(_id))}
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
          onClick={() => dispatch(deleteTodo(_id))}
        >
          <img src={Delete} alt='delete' />
        </button>
      </div>
    </TaskListWrapper>
  );
};

export default Todo;
