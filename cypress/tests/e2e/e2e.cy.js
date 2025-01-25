describe('Test Login Page', () => {

    beforeEach(() => {
      const baseUrl = Cypress.config('baseUrl');
      cy.visit(`${baseUrl}/login`);
    });
  
    it('Check if the homepage loads correctly', () => {
      cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
      cy.get('h1.font-robot').should('contain', 'Login');
    });
  });
  
  