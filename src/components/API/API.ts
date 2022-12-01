/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteTodo } from '../../store/todoSlice';

const BASE_URL = 'http://localhost:3001/api/todos';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllTodos = createAsyncThunk('getAllTodos', async () => {
  const res = await axiosInstance.get(BASE_URL);
  return res.data;
});

export const addTodo = createAsyncThunk('createTodo', async (value: string) => {
  const res = axiosInstance.post('/', { value });
  const result = await (await res).data;
  return result;
});

export const editTodo = async (_id: string, value: string, status: boolean) => {
  try {
    await axiosInstance.patch(`/${_id}`, { value, status });
  } catch (error) {
    console.log(error);
  }
};

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
