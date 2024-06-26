import {Box, Button, FormControl, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "hooks/hooks";
import {saveTodo, setDescription, selectDescription} from "features/todo";
import {ChangeEvent} from "react";


const TodoForm = () => {
  const description = useAppSelector(selectDescription);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(event.target.value));
  }

  const addTodo = () => {
    dispatch(saveTodo(description));
  }

  return (
    <Paper elevation={3} sx={{marginTop: 4, marginBottom: 4, padding: 2}}>
      <Typography variant="h4">
        What do you want to accomplish today?
      </Typography>
      <FormControl fullWidth sx={{paddingBottom: 1}}>
        <TextField id="task" label="A task, a reminder..." variant="filled" value={description} onChange={handleChange} />
      </FormControl>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={addTodo}>Add</Button>
      </Box>
    </Paper>
  );
};

export default TodoForm;