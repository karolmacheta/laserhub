
describe('Google Search', () => {
  beforeEach(() => {
    cy.visit('https://app.laserhub.com/login');
    cy.get('[data-label="login-form"]').should('be.visible');
    cy.log('Succesfully opened the website');
  })

  it('tries to login without credentials via submit', () => {
    cy.get('[data-label="login-form"]').submit();
    cy.get('[role="alert"]').contains(' ERROR ').should('be.visible');
  });

  it('tries to login with only Email', () => {
    cy.get('#email').should('be.visible').type('e.ioannidis+testing_worktask@laserhub.com');
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('[data-label="login-form"]').should('be.visible');
  });

  it('tries to login with only Password', () => {
    cy.get('#password').should('be.visible').type('l0vet3sting@');
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('[data-label="login-form"]').should('be.visible');
  });

  it('tries to login with wrong Password', () => {
    cy.get('#email').should('be.visible').type('e.ioannidis+testing_worktask@laserhub.com');
    cy.get('#password').should('be.visible').type('abc@wp.pl');
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('[data-label="login-form"]').should('be.visible');
  });

  it('tries to login with wrong EMail', () => {
    cy.get('#email').should('be.visible').type('test@abc.com');
    cy.get('#password').should('be.visible').type('l0vet3sting@');
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('[data-label="login-form"]').should('be.visible');
  });

  it('tries to login with correct Login and Password', () => {
    cy.get('#email').should('be.visible').type('e.ioannidis+testing_worktask@laserhub.com');
    cy.get('#password').should('be.visible').type('l0vet3sting@');
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('[data-label="login-form"]').should('not.exist');
  });

});