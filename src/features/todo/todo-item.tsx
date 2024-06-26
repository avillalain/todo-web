import {Card, Grid} from "@mui/material";
import Typography from "@mui/material/Typography"
import {Todo} from "features/todo";

interface Props {
  todo: Todo
}

const TodoItem = ({todo}: Props) => {
  return (
    <Grid xs={4} item={true}>
      <Card sx={{marginRight: 2, marginBottom: 2, padding: 2}}>
        <Typography variant="h6">
          {todo.description}
        </Typography>
      </Card>
    </Grid>
  );
};

export default TodoItem;