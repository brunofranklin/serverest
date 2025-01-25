describe('API Tests for Serverest - Public Endpoints', () => {
    it('Check if return status 200 for the GET /usuarios request', () => {
      cy.request('GET', 'https://serverest.dev/usuarios')
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
});

describe('API Tests for Serverest - Create User', () => {
    it('Create a user with random data', () => {
      const randomName = `Fulano ${Math.random().toString(36).substring(2, 10)}`;
      const randomEmail = `email-${Math.random().toString(36).substring(2, 15)}@qa.com.br`;
      const randomPassword = `senha-${Math.random().toString(36).substring(2, 10)}`;

      const newUser = {
        nome: randomName,
        email: randomEmail,
        password: randomPassword,
        administrador: 'false'
      };

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: newUser
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
