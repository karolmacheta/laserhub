import { loginPage } from "../locators/loginPage.js"

Cypress.Commands.add('openLoginPage', () => {
    cy.visit('https://app.laserhub.com/login');
    cy.get(loginPage.loginForm).should('be.visible');
    cy.log('Succesfully opened login page');
  })

Cypress.Commands.add('checkIfOnLoginPage', () => {
    cy.get(loginPage.loginForm).should('be.visible');
})

Cypress.Commands.add('clickSubmitBtn', () => {
    cy.get(loginPage.submitBtn).should('be.visible').click();
})

Cypress.Commands.add('typeInPass', (pass) => {
    cy.get('#password').should('be.visible').type(pass);
})

Cypress.Commands.add('typeInEmail', (email) => {
    cy.get('#email').should('be.visible').type(email);
})

Cypress.Commands.add('errorCheck', () => {
    cy.get(loginPage.alert).contains(' ERROR ').should('be.visible');
})