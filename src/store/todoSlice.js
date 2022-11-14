import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({ id: uuidv4(), task: action.payload, status: false });
    },
    toggleTask(state, action) {},
    removeTask(state, action) {},
  },
});

export const { addTask, toggleTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
