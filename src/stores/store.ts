import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import { todoReducer } from "features/todo";

const rootReducer = combineReducers({
  todo: todoReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer, preloadedState
  });
}

export const initialState: RootState = {
  todo: {
    todos: [],
    description: "",
  }
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
