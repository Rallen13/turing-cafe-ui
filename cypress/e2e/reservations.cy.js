describe("Reservations Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      fixture: "reservations",
    }).visit("http://localhost:3000");
  });

  it("should contain a heading", () => {
    cy.dataCy("app-heading").contains("Turing Cafe Reservations");
  });

  it("should display a reservation card that displays name, date, time, party number, and cancel button", () => {
    cy.dataCy("reservation-card")
      .first()
      .within(() => {
        cy.dataCy("reservation-name").contains("Christie");
        cy.dataCy("reservation-date").contains("12/29");
        cy.dataCy("reservation-time").contains("7:00");
        cy.dataCy("reservation-number").contains("12");
        cy.dataCy("reservation-cancel-button").contains("Cancel");
      });
  });

  it("should contain a form with inputs for name, date, time, and number", () => {
    cy.dataCy("input-name").type("Rachel").should("have.value", "Rachel");
    cy.dataCy("input-date").type("4/5").should("have.value", "4/5");
    cy.dataCy("input-time").type("7:00").should("have.value", "7:00");
    cy.dataCy("input-number").type("7").should("have.value", "7");
  });

  it("should be able to submit a completed form", () => {
    cy.dataCy("input-name").type("Rachel").should("have.value", "Rachel");
    cy.dataCy("input-date").type("4/5").should("have.value", "4/5");
    cy.dataCy("input-time").type("7:00").should("have.value", "7:00");
    cy.dataCy("input-number").type("7").should("have.value", "7");
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {
      fixture: "newReservation",
    });
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      fixture: "addedReservations",
    });
    cy.dataCy("form-button")
      .click()
      .then(() => {
        cy.dataCy("reservation-card").last().should("contain", "Rachel");
      });
  });

  it("should be able to submit a reservation", () => {
    cy.dataCy("input-name").type("Rachel").should("have.value", "Rachel");
    cy.dataCy("input-date").type("4/5").should("have.value", "4/5");
    cy.dataCy("input-time").type("7:00").should("have.value", "7:00");
    cy.dataCy("input-number").type("7").should("have.value", "7");
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {
      fixture: "newReservation",
    });
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      fixture: "addedReservations",
    });
    cy.dataCy("form-button")
      .click()
      .then(() => {
        cy.dataCy("reservation-card").last().should("contain", "Rachel");
      });
  });

  it("should be able to cancel a reservation", () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      fixture: "addedReservations",
    });
    cy.visit("http://localhost:3000");
    cy.dataCy("reservation-card")
      .last()
      .within(() => {
        cy.intercept("DELETE", "http://localhost:3001/api/v1/reservations/4", {
          fixture: "newReservation",
        });
        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
          fixture: "reservations",
        });
        cy.dataCy("reservation-cancel-button").click();
      })
      .then(() => {
        cy.dataCy("reservation-card").should("have.length", 3);
      });
  });
});
