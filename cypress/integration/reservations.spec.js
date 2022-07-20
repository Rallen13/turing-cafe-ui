describe("Reservations Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("Should display all reservations", () => {
    cy.get(".reservation-card").should("have.length", 9);
  });

  it(".submit() - submit a form", () => {
    cy.get(".reservation-form").find('[name="name"]').type("Rachel");
    cy.get(".reservation-form").find('[name="date"]').type("07/28");
    cy.get(".reservation-form").find('[name="time"]').type("7:00");
    cy.get(".reservation-form").find('[name="number"]').type("2");

    cy.get(".reservation-form").submit();
  });
});
