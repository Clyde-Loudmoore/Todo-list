import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  task: string;
  status: boolean;
};

type TodosState = {
  todos: Todo[];
  filter: string;
};

const newTodosArray: Todo[] =
  JSON.parse(localStorage.getItem("todos") as string) || [];

const initialState: TodosState = {
  todos: newTodosArray,
  filter: "All",
};

const todoSlice = createSlice({
  name: "todos",
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
      console.log(state, action);

      state.filter = action.payload;
    },
  },
});

export const filteringTask = createSelector(
  (state: RootState) => state.todos.todos,
  (state: RootState) => state.todos.filter,
  (todos, filter) => {
    if (filter === "Complited") {
      return todos.filter((item) => item.status);
    }
    if (filter === "Active") {
      return todos.filter((item) => !item.status);
    }
    return todos;
  }
);

export const { addTask, toggleTask, removeTask, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
