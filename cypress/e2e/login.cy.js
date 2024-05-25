describe('Login Functionality', () => {

    before(function () {

        // cy.fixture('login-data').as('loginData')

      cy.fixture('login-data').then((data) => {
        this.loginData = data;
      });
    });
  
    // Common setup before each test
    beforeEach(function () {
      cy.visit('https://www.acmecorp.com/nj/customer/account/login/');
      cy.get('.easybanner-close').click();
      cy.get('#btn-cookie-allow > span').click();
    });
  
    it('Empty Username and Password', function () {
      cy.get('button[type="submit"]').click({ multiple: true, force: true });
  
      cy.get('.mage-error').should('have.text', 'This is a required field.');
      cy.get('.mage-error').should('have.text', 'This is a required field.');
    });
  
    it('Invalid Username', function () {
        cy.get('form#login-form input[name="login[username]"]').type("invalidUsername");
        cy.get('form#login-form input[name="login[password]"]').type("validPassword");
      cy.get('button[type="submit"]').click({ multiple: true, force: true });
  
      cy.get('.mage-error').should('be.visible');
      cy.get('.mage-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com)');
    });

  });
  