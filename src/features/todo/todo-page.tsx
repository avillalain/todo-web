import {fetchTodos, TodoForm, TodoList} from "features/todo";
import { useEffect } from "react";
import {useAppDispatch} from "../../hooks/hooks";

const TodoPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  });

  return (
    <>
      <TodoForm/>
      <TodoList/>
    </>
  );
};

export default TodoPage;