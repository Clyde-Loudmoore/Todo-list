import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteTodo } from '../store/todoSlice';
import { axiosInstance, BASE_URL } from '../API';

export const getAllTodos = createAsyncThunk('getAllTodos', async () => {
  const res = await axiosInstance.get(BASE_URL);
  return res.data;
});

export const addTodo = createAsyncThunk('createTodo', async (value: string) => {
  const res = await axiosInstance.post('/', { value });
  return res.data;
});

export const deleteTask = createAsyncThunk(
  'deleteTodo',
  async (_id: string, { dispatch }) => {
    try {
      await axiosInstance.delete(`/${_id}`);

      dispatch(deleteTodo(_id));
    } catch (error) {
      console.log(error);
    }
  }
);
