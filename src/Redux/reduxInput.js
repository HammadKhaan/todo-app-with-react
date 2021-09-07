import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    todos: [],
  },

  reducers: {
    add: (state, action) => {
      console.log(`action`, action);
      console.log(`state`, state);
      const { type, payload } = action;
      state.todos = [...state.todos, payload];
    },
    del: (state, { payload }) => {
      const { id } = payload;
      state.todos = state.todos.filter((todo, i) => i !== id);
    },
    editTodo: (state, { payload }) => {
      const { i, todo } = payload;
      state.todos[i] = todo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del, editTodo } = inputSlice.actions;

export default inputSlice;
