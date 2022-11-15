import { createSlice, createSelector } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const newTodosArray = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: newTodosArray,
    filter: "All",
  },
  reducers: {
    addTask(state, action) {
      state.todos.push({
        id: uuidv4(),
        task: action.payload.userInput,
        status: false,
      });
    },
    toggleTask(state, action) {
      const toggledTask = state.todos.find(
        (todo) => todo.id === action.payload
      );
      toggledTask.status = !toggledTask.status;
    },
    removeTask(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    filterTodo(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filteringTask = createSelector(
  ({ todos }) => todos,
  (todos) => {
    if (todos.filter === "Complited") {
      console.log(todos);
      return todos.todos.filter((item) => item.status);
    }
    if (todos.filter === "Active") {
      return todos.todos.filter((item) => !item.status);
    }
    return todos.todos;
  }
);

export const { addTask, toggleTask, removeTask, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
