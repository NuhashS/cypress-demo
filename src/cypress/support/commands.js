// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getBySelector', (selector, value) => {
    return cy.get(`[${selector}="${value}"]`)
})

Cypress.Commands.add('getCopiedText', (selector) => {
    return cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq(selector);
        });
      });
})