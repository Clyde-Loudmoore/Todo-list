/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  await axiosInstance.patch(
    `/${_id}`,
    { value, status }

    // inputValue === "" ? { done: !todo.done } : { name: inputValue }
  );
};

export const deleteTodo = createAsyncThunk(
  'deleteTodo',
  async (_id: string) => {
    const res = await axiosInstance.delete(`/${_id}`);
    return res.data;
  }
);

// export const deleteTodo = (_id: string) => {
//   axiosInstance.delete(`/${_id}`);
// };
