describe('Google Search Functionality', () => {

    beforeEach(() => {
      cy.visit('https://www.google.com');
    });
  
    it('should have a search bar, buttons and logo visible', () => {
      cy.get('input[name="q"]').should('be.visible');
      cy.get('input[name="btnK"]').should('be.visible');
      cy.get('input[name="btnI"]').should('be.visible');
      cy.get('img[alt="Google"]').should('be.visible');
    });
  
    it('should display suggestions while typing', () => {
      cy.get('input[name="q"]').type('Cypress Testing');
      cy.get('.erkvQe').should('be.visible');
    });
  
    it('should search for a simple keyword', () => {
      cy.get('input[name="q"]').type('Cypress Testing{enter}');
      cy.url().should('include', 'search?q=Cypress+Testing');
      cy.get('#search').should('be.visible');
      cy.contains('Cypress Testing').should('be.visible');
    });
  
    it('should handle empty query', () => {
      cy.get('input[name="btnK"]').click();
      cy.url().should('eq', 'https://www.google.com/');
    });
  
    it('should use advanced search operators', () => {
      cy.get('input[name="q"]').type('site:github.com cypress testing{enter}');
      cy.url().should('include', 'search?q=site:github.com+cypress+testing');
      cy.get('#search').should('be.visible');
      cy.contains('github.com').should('be.visible');
    });
  
    it('should search for a phrase in quotes', () => {
      cy.get('input[name="q"]').type('"Cypress Testing Framework"{enter}');
      cy.url().should('include', 'search?q=%22Cypress+Testing+Framework%22');
      cy.get('#search').should('be.visible');
      cy.contains('"Cypress Testing Framework"').should('be.visible');
    });
  
    it('should handle special characters in search', () => {
      cy.get('input[name="q"]').type('!@#$%^&*()_+{enter}');
      cy.url().should('include', 'search?q=%21%40%23%24%25%5E%26*%28%29_%2B');
      cy.get('#search').should('be.visible');
    });
  
    it('should use the "I\'m Feeling Lucky" button', () => {
      cy.get('input[name="q"]').type('Cypress Testing');
      cy.get('input[name="btnI"]').click();
      cy.url().should('not.include', 'search?q=Cypress+Testing');
    });
  
    it('should verify pagination works correctly', () => {
      cy.get('input[name="q"]').type('Cypress Testing{enter}');
      cy.get('#search').should('be.visible');
      cy.get('#foot').contains('Next').click();
      cy.url().should('include', 'start=10');
    });
  
    it('should change language and perform a search', () => {
      cy.get('a[href*="hl=es"]').click();
      cy.url().should('include', 'hl=es');
      cy.get('input[name="q"]').type('Pruebas de Cypress{enter}');
      cy.url().should('include', 'search?q=Pruebas+de+Cypress');
      cy.get('#search').should('be.visible');
      cy.contains('Pruebas de Cypress').should('be.visible');
    });
  
  });
  