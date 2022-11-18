/* eslint-disable @typescript-eslint/comma-dangle */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { RootStateType } from './index';

type TodoType = {
  id: string;
  task: string;
  status: boolean;
};

type TodosStateType = {
  todos: TodoType[];
  filter: string;
};

const newTodosArray: TodoType[] =
  JSON.parse(localStorage.getItem('todos') as string) || [];

const initialState: TodosStateType = {
  todos: newTodosArray,
  filter: 'All',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.todos.push({
        id: uuidv4(),
        task: action.payload,
        status: false,
      });
    },
    toggleTask(state, action: PayloadAction<string>) {
      const toggledTask = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTask) {
        toggledTask.status = !toggledTask.status;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    filterTodo(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
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

export const { addTask, toggleTask, removeTask, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
