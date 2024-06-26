import {fireEvent, screen, waitFor} from '@testing-library/react'
import {renderWithProviders} from "tests";
import {TodoForm} from "features/todo";
import fetchMockJest from "fetch-mock-jest";

fetchMockJest.config.sendAsJson = true;

describe("TodoForm", () => {
  const task = "get paints";

  it("should allow the user to add new todos", async () => {
    fetchMockJest
      .post("/todos", {id: 1, description: task})

    renderWithProviders(<TodoForm/>, {preloadedState: {
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
      expect(input).toHaveDisplayValue('');
    });
  });
})