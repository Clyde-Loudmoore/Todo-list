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
  console.log(res.data);
  return res.data;
});

export const addTodo = createAsyncThunk(
  'postTodo',
  async (todoValue: string) => {
    const res = axiosInstance.post('/', { todoValue });
    const result = await (await res).data;
    return result;
  }
);

export const deleteTodo = createAsyncThunk(
  'removeTask',
  async (_id: string) => {
    const params = { _id };
    const res = axiosInstance.delete('/:id', { params });
    const result = await (await res).data._id;
    return result;
  }
);

export const axiosPost = async (todoValue: string) => {
  return axiosInstance.post('api/todos', { todoValue });
};
