import {Grid} from "@mui/material";
import {useAppSelector} from "hooks/hooks";
import {selectTodos, Todo, TodoItem} from "features/todo";

const TodoList = () => {
  const todos: Todo[] = useAppSelector(selectTodos);

  return (
    <Grid container
          columns={12}>
      {todos.map((todo:Todo, index: number) => (
        <TodoItem key={index} todo={todo}/>
      ))}
    </Grid>
  );
};

export default TodoList;