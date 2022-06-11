import { loginPage } from "../../locators/loginPage.js"

describe('Login to Laserhub', () => {
  beforeEach(() => {
    cy.openLoginPage();
  })

  it('tries to login without credentials via submit', () => {
    cy.get(loginPage.loginForm).submit()
    cy.errorCheck();
    cy.log('Success - User cannot login withouth credentials');
  });

  it('tries to login with only Email', () => {
    cy.typeInEmail('e.ioannidis+testing_worktask@laserhub.com');
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login withouth password');
  });

  it('tries to login with only Password', () => {
    cy.typeInPass('l0vet3sting@');
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login withouth email');
  });

  it('tries to login with wrong Password', () => {
    cy.typeInEmail('e.ioannidis+testing_worktask@laserhub.com');
    cy.typeInPass('fakePass');
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login with wrong password');
  });

  it('tries to login with wrong EMail', () => {
    cy.typeInEmail('test@abc.com');
    cy.typeInPass('l0vet3sting@');
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login with wrong email');
  });

  it('tries to login with correct Login and Password', () => {
    cy.typeInEmail('e.ioannidis+testing_worktask@laserhub.com');
    cy.typeInPass('l0vet3sting@');
    cy.clickSubmitBtn();
    cy.get(loginPage.loginForm).should('not.exist');
    cy.log('Success - User successfully logged in correct email and pass');
  });

});