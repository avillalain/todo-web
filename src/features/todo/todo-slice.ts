import {AsyncThunk, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "stores";
import * as async_hooks from "node:async_hooks";
import {TodoApi} from "./todo-api";

export interface Todo {
  id: number;
  description: string;
}

export interface TodoState  {
  description: string
  todos: Todo[];
}

const initialState: TodoState = {
  description: "",
  todos: [],
}

export const saveTodo = createAsyncThunk('todo/save', async (todo:string): Promise<Todo> => {
  return await TodoApi.save(todo);
});

export const fetchTodos = createAsyncThunk('todo/fetch', async (): Promise<Todo[]> => {
  return await TodoApi.findAll();
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setDescription: (state: TodoState, action: PayloadAction<string>) => {
      state.description = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveTodo.fulfilled, (state:TodoState, action:PayloadAction<Todo> ) => {
      state.todos = state.todos.concat(action.payload);
      state.description = ""
    });

    builder.addCase(fetchTodos.fulfilled, (state: TodoState, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    });
  }
});

export const {setDescription} = todoSlice.actions;

export const selectTodos = (state: RootState) : Todo[] => state.todo.todos;
export const selectDescription = (state: RootState): string => state.todo.description;

export default todoSlice.reducer;