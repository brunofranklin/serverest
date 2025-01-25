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
  
  describe('API Tests for Serverest - Authenticated Endpoints', () => {
    let authToken;
  
    beforeEach(() => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: 'fulano@qa.com',
          password: 'teste'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        authToken = response.body.authorization.replace('Bearer ', '');
      });
    });
  
    it('Create a product with random data', () => {
      const randomName = `Produto-${Math.random().toString(36).substring(2, 15)}`;
      const randomPrice = Math.floor(Math.random() * 1000);
      const randomDescription = `Descrição ${Math.random().toString(36).substring(2, 15)}`;
      const randomQuantity = Math.floor(Math.random() * 500);
  
      const newProduct = {
        nome: randomName,
        preco: randomPrice,
        descricao: randomDescription,
        quantidade: randomQuantity
      };
  
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          authorization: `Bearer ${authToken}`
        },
        body: newProduct,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201);
  
        const createdProduct = response.body;
        const productId = createdProduct._id;
  
        cy.log(`ID = ${productId}`);
        expect(createdProduct).to.have.property('_id');
      });
    });
  });
  