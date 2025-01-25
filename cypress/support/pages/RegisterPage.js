class RegisterPage {
    generateName() {
      const firstNames = ['John', 'Maria', 'Carlos', 'Ana', 'Peter', 'Lucas'];
      const lastNames = ['Smith', 'Santos', 'Johnson', 'Costa', 'Pereira'];
      return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    }
  
    generateEmail() {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const domain = 'test.com';
      let email = '';
      for (let i = 0; i < 10; i++) {
        email += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      return `${email}@${domain}`;
    }
  
    generatePassword() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return password;
    }
  
    visit() {
      cy.get('[data-testid="cadastrar"]').click();
    }
  
    fillRegistrationForm(name, email, password) {
      cy.get('[data-testid="nome"]').type(name);
      cy.get('[data-testid="email"]').type(email);
      cy.get('[data-testid="password"]').type(password);
    }
  
    submitRegistration() {
      cy.get('[data-testid="cadastrar"]').click();
    }
  
    verifyRegistrationSuccess() {
        cy.wait(5000)
        cy.get('h1').contains('Serverest Store').should('be.visible');
      }
      
  }
  
  export default new RegisterPage(); 
  