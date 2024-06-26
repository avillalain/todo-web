import {screen} from '@testing-library/react'
import {renderWithProviders} from "tests";
import {TodoList} from "features/todo";

describe("TodoList", () => {
  it("should render a list of todos", () => {
    const initialTodos = [
      {id: 1, description: "Get paints"},
      {id: 2, description: "Get more paints"}
    ];

    renderWithProviders(<TodoList/>, {preloadedState: {
       todo: {
         description: "",
         todos: initialTodos,
       },
      }});
    initialTodos.map( (todo) => expect(screen.getByText(todo.description)).toBeInTheDocument());
  });
})