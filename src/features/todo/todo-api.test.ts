import {provider} from "tests";
import {MatchersV3} from "@pact-foundation/pact";
import {TodoApi} from "./todo-api";

describe("TodoApi Service", () => {
  it("should return a list of all movies", async () => {
    const todos = {id: 1, description: "Buy more minis"};
    const expectedBody = MatchersV3.eachLike(todos);
    provider
      .given("I have a list of Todos")
      .uponReceiving("a request for all todos")
      .withRequest({method: "GET", path: "/todos", headers: { Accept: "application/json" }})
      .willRespondWith({
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: expectedBody
      });

    await provider.executeTest(async (mockServer) => {
      const response = await TodoApi.findAll(mockServer.url);
      expect(response[0]).toEqual(todos);
    });
  });

  it("should return the todo after saving it", async () => {
    const todo = {id: 1, description: "Buy more minis"};
    const expectedBody = MatchersV3.like(todo);
    provider
    .given("I am adding a new todo")
      .uponReceiving("a request for a new todo")
      .withRequest({method: "POST", path: "/todos", headers: { "Content-Type": "application/json" }, body: {description: todo.description}})
      .willRespondWith({
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: expectedBody
      });

    await provider.executeTest(async (mockServer) => {
      const response = await TodoApi.save(todo.description, mockServer.url);
      expect(response).toEqual(todo);
    });
  });
});