import {Todo} from "./todo-slice";

export const TodoApi = {
  findAll: async (baseUrl: string = "") => {
    const response = await fetch(`${baseUrl}/todos`, { method: "GET", headers: { Accept: "application/json" } });
    return await response.json();
  },
  save: async ( todo: string, baseUrl: string = "",) => {
    const response = await fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({description: todo})
    });
    return await response.json() as Todo;
  }
};