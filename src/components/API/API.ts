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
  const res = axiosInstance.post(BASE_URL, { value });
  const result = await (await res).data;
  return result;
});

export const deleteTodo = createAsyncThunk('deleteTodo', async (id: number) => {
  const params = { id };
  const res = axiosInstance.delete(BASE_URL, { params });
  const result = await (await res).data.id;
  console.log(result);

  return result;
});
