describe("Todo application", () => {
    it("should allow the user to add a new task", () => {
        const expectedTodo =  {id: 1, description: "I want to paint minis"};
        cy.intercept({ method: "POST", url: "/todos"}, expectedTodo);
        cy.intercept({ method: "GET", url: "/todos"}, []);
        cy.visit("/");

        cy.get('#task').type(expectedTodo.description);
        cy.contains('button', 'Add').click();

        cy.contains(expectedTodo.description);
    });

    it("should display all existing todos", () => {
        const expectedTodos =  [{id: 1, description: "I want to paint minis"}];
        cy.intercept({ method: "GET", url: "/todos"}, expectedTodos);
        cy.visit("/");

        cy.contains(expectedTodos[0].description);
    })
});