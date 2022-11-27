/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
import React from 'react';

import { useAppSelector, useAppDispatch } from '../../hook';
import { getAllTodos } from '../API/API';

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
                key={item.id}
                id={item.id}
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
