import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do Advantage Online Shopping", () => {
  cy.visit("/");
});

When("eu busco pelo produto {string}", (produto) => {
  cy.get("#menuSearch").type(produto);
  cy.get("#menuSearch").click();
});

When("eu incluo o produto no carrinho", () => {
    cy.get("#20").click();
    cy.get('button[name="save_to_cart"]').click();
});

When("eu vou para a tela de pagamento", () => {
    cy.get("#checkOutPopUp").click();
});

Then("o carrinho deve conter o produto {string}", (produto) => {
  cy.get(".ng-binding").should("contain", produto);
});
