/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-console
import React from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { getAllTodos } from '../../store/todoThunk';

import Form from '../Form';
import Todo from '../Todo';
import Buttons from '../Buttons';

import MainWrapper from './Main.style';
import { filteringTask } from '../../store/todoSlice';

const Main: React.FC = () => {
  const newTodos = useAppSelector(filteringTask);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <MainWrapper>
      <Form />
      <Buttons />
      <div className='todo__content-wrapper'>
        <ul className='todo'>
          {newTodos.filteredTodos.map((item) => {
            return (
              <Todo
                key={item._id}
                _id={item._id}
                value={item.value}
                status={item.status}
              />
            );
          })}
        </ul>
      </div>
    </MainWrapper>
  );
};

export default Main;
