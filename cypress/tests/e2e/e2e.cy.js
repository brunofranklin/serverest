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
      
      const generateName = () => {
        const firstNames = ['John', 'Maria', 'Carlos', 'Ana', 'Peter', 'Lucas'];
        const lastNames = ['Smith', 'Santos', 'Johnson', 'Costa', 'Pereira'];
        return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
      };
  
      const generateEmail = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const domain = 'test.com';
        let email = '';
        for (let i = 0; i < 10; i++) {
          email += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return `${email}@${domain}`;
      };
  
      const generatePassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let password = '';
        for (let i = 0; i < 8; i++) {
          password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
      };
  
      const name = generateName();
      const email = generateEmail();
      const password = generatePassword();
  
      cy.get('[data-testid="cadastrar"]').click();  
      cy.get('[data-testid="nome"]').type(name);
      cy.get('[data-testid="email"]').type(email);
      cy.get('[data-testid="password"]').type(password);
            
      cy.get('[data-testid="cadastrar"]').click();
      
      cy.get('h1').contains('Serverest Store', { timeout: 10000 }).should('be.visible');
  
      });


  });
  
  