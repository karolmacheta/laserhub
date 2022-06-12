import { loginPage } from "../../locators/loginPage.js"
// import { testUser } from "../../fixtures/loginData.js"
import testUser from "../../fixtures/User.json"

describe('Login to Laserhub', () => {
  beforeEach(() => {
    cy.log(testUser.email);
    cy.log(testUser.pass);
    cy.openLoginPage();
  })

  it('tries to login without credentials via submit', () => {
    cy.get(loginPage.loginForm).submit()
    cy.errorCheck();
    cy.log('Success - User cannot login withouth credentials');
  });

  it('tries to login with only Email', () => {
    cy.log(testUser.pass);
    cy.typeInEmail(testUser.email);
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login withouth password');
  });

  it('tries to login with only Password', () => {
    cy.typeInPass(testUser.pass);
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login withouth email');
  });

  it('tries to login with wrong Password', () => {
    cy.typeInEmail(testUser.email);
    cy.typeInPass('fakePass');
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login with wrong password');
  });

  it('tries to login with wrong EMail', () => {
    cy.typeInEmail('test@abc.com');
    cy.typeInPass(testUser.pass);
    cy.clickSubmitBtn();
    cy.checkIfOnLoginPage();
    cy.log('Success - User cannot login with wrong email');
  });

  it('tries to login with correct Login and Password', () => {
    cy.typeInEmail(testUser.email);
    cy.typeInPass(testUser.pass);
    cy.clickSubmitBtn();
    cy.get(loginPage.loginForm).should('not.exist');
    cy.checkIfOnProductPage();
    cy.log('Success - User successfully logged in correct email and pass');
  });

});