/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-console */
import axios from 'axios';


export const BASE_URL = 'http://localhost:3001/api/todos';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});



export const editTodo = async (_id: string, value: string, status: boolean) => {
  try {
    await axiosInstance.patch(`/${_id}`, { value, status });
  } catch (error) {
    console.log(error);
  }
};


