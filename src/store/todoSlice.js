import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state, action) {
      state.todos.push({ id: uuidv4(), task: action.payload.userInput, status: false });
    },
    toggleTask(state, action) {
        const toggledTask = state.todos.find(todo => todo.id === action.payload);
        toggledTask.status = !toggledTask.status;
    },
    removeTask(state, action) {
        console.log(state);
        console.log(action);

        state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
  },
});

export const { addTask, toggleTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
