import {fireEvent, getByText, screen, waitFor} from '@testing-library/react'
import {renderWithProviders} from "tests";
import {TodoPage} from "features/todo";
import fetchMockJest from "fetch-mock-jest";

fetchMockJest.config.sendAsJson = true;

describe("TodoForm", () => {
  const task = "get paints";

  beforeEach(() => {
    fetchMockJest.mockReset();
  })

  it("should allow the user to add new todos", async () => {
    fetchMockJest
      .get("/todos", []);
    fetchMockJest
      .post("/todos", {id: 1, description: task});

    renderWithProviders(<TodoPage/>, {preloadedState: {
        todo: {
          description: "",
          todos: []
        },
      }});

    const input = screen.getByRole("textbox", {name: /task/i });
    const button = screen.getByRole("button", {name: /add/i });

    fireEvent.change(input, { target: { value: task}});
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(task)).toBeInTheDocument()
    });
  });

  it("should display all existing todos when page loads", async () => {
    const expectedTodos = [{id: 1, description: task}];
    fetchMockJest
      .get("/todos", expectedTodos);

    renderWithProviders(<TodoPage/>, {preloadedState: {
        todo: {
          description: "",
          todos: []
        },
      }});

    await waitFor(() => {
      expect(screen.getByText(expectedTodos[0].description)).toBeInTheDocument()
    });
  });
})