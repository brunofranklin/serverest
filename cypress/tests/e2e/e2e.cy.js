import CheckoutPage from '../../support/pages/CheckoutPage';
import RegisterPage from '../../support/pages/RegisterPage';

describe('Test Login Page', () => {

    beforeEach(() => {
      const baseUrl = Cypress.config('baseUrl');
      cy.visit(`${baseUrl}/login`);
    });
  
    it('Check if the homepage loads correctly', () => {
      cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
      cy.get('h1.font-robot').should('contain', 'Login');
    });

    it('Check if the user registration is functional with random data', () => {
        const name = RegisterPage.generateName();
        const email = RegisterPage.generateEmail();
        const password = RegisterPage.generatePassword();
    
        RegisterPage.visit();
        RegisterPage.fillRegistrationForm(name, email, password);
        RegisterPage.submitRegistration();
        RegisterPage.verifyRegistrationSuccess();
      });

      it('Test checkout with the first product in the listing', () => {
        const name = RegisterPage.generateName();
        const email = RegisterPage.generateEmail();
        const password = RegisterPage.generatePassword();
    
        RegisterPage.visit();
        RegisterPage.fillRegistrationForm(name, email, password);
        RegisterPage.submitRegistration();
        RegisterPage.verifyRegistrationSuccess();
        CheckoutPage.GetFirstproduct() //select the first product from the list
        CheckoutPage.addToList();
        CheckoutPage.addToCart();
      });

      it('test logout button after registering a new user', () => {
        const name = RegisterPage.generateName();
        const email = RegisterPage.generateEmail();
        const password = RegisterPage.generatePassword();
    
        RegisterPage.visit();
        RegisterPage.fillRegistrationForm(name, email, password);
        RegisterPage.submitRegistration();
        RegisterPage.verifyRegistrationSuccess();
        cy.get('[data-testid="logout"]').click();
        cy.get('h1.font-robot').should('contain', 'Login');
      });



  });
  
  