import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do Advantage Online Shopping", () => {
  cy.visit("/");
});

When("eu busco pelo produto {string}", (produto) => {
  cy.get("#menuSearch").type(produto);
  cy.get("#menuSearch").click();
});

Then("o produto {string} deve aparecer nos resultados", (produto) => {
  cy.get("#searchResultLabel").should("contain", produto);
});
