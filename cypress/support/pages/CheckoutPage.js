class CheckoutPage {
    GetFirstproduct() {
        cy.get('a[data-testid="product-detail-link"]').first().click();
      }
    
    addToList() {
        cy.get('[data-testid="adicionarNaLista"]').click();
      } 
  
    addToCart() {
        cy.get('[data-testid="adicionar carrinho"]').click();
      }   
      
  }
  
  export default new CheckoutPage(); 
  