/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-console */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootStateType } from './index';
import { addTodo, getAllTodos, deleteTodo } from '../components/API/API';

type TodoType = {
  _id: string;
  value: string;
  status: boolean;
};

type TodosStateType = {
  todos: TodoType[];
  filter: string;
};

const newTodosArray: TodoType[] = [];

const initialState: TodosStateType = {
  todos: newTodosArray,
  filter: 'All',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTask(state, action: PayloadAction<string>) {
      const toggledTask = state.todos.find(
        (todo) => todo._id === action.payload
      );
      if (toggledTask) {
        toggledTask.status = !toggledTask.status;
      }
    },
    filterTodo(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const id = action.payload.id;
        const indexTodo = state.todos.findIndex((item) => item._id === id);
        state.todos.splice(indexTodo, 1);
        return state;
      });
  },
});

export const filteringTask = createSelector(
  (state: RootStateType) => state.tasks.todos,
  (state: RootStateType) => state.tasks.filter,
  (todos, filter) => {
    let count = 0;

    let filteredTodos = todos.filter((item) => {
      if (item.status) {
        count++;
      }
      return { filteredTodos: count };
    });
    if (filter === 'Complited') {
      filteredTodos = todos.filter((item) => item.status);
      return { filteredTodos, activeCount: count };
    }
    if (filter === 'Active') {
      filteredTodos = todos.filter((item) => !item.status);
      return { filteredTodos, activeCount: count };
    }
    return { filteredTodos: todos, activeCount: count };
  }
);

export const { toggleTask, filterTodo } = todoSlice.actions;
export default todoSlice.reducer;
