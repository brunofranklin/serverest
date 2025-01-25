describe('API Tests for Serverest - Public Endpoints', () => {
    it('Check if return status 200 for the GET /usuarios request', () => {
      cy.request('GET', 'https://serverest.dev/usuarios')
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
});