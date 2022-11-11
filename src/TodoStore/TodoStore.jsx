import { configureStore } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const store = configureStore(todos);

const addTodo = (task) => {
  return {
    id: uuidv4(),
    status: false,
    task,
  };
};

store.dispatch(addTodo(userInputValue));
