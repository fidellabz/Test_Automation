describe('AXA Mansard Login Page', () => {

    // Visit the login page before each test
    beforeEach(() => {
      cy.visit('https://www.axamansard.com/login');
    });
  
    it('displays the login form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('should log in successfully with valid credentials', () => {
      cy.get('input[name="username"]').type('validUsername');
      cy.get('input[name="password"]').type('validPassword');
      cy.get('button[type="submit"]').click();
  
      // Assuming successful login redirects to a dashboard
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, validUsername').should('be.visible');
    });
  
    it('should display an error for incorrect password', () => {
      cy.get('input[name="username"]').type('validUsername');
      cy.get('input[name="password"]').type('invalidPassword');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid username or password').should('be.visible');
    });
  
    it('should display an error for incorrect username', () => {
      cy.get('input[name="username"]').type('invalidUsername');
      cy.get('input[name="password"]').type('validPassword');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid username or password').should('be.visible');
    });
  
    it('should display an error for empty username', () => {
      cy.get('input[name="password"]').type('validPassword');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Username is required').should('be.visible');
    });
  
    it('should display an error for empty password', () => {
      cy.get('input[name="username"]').type('validUsername');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Password is required').should('be.visible');
    });
  
    it('should display an error for empty username and password', () => {
      cy.get('button[type="submit"]').click();
  
      cy.contains('Username is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
    });
  
    // Checking for the presence of all required UI elements
    it('should have a username input field', () => {
      cy.get('input[name="username"]').should('be.visible');
    });
  
    it('should have a password input field', () => {
      cy.get('input[name="password"]').should('be.visible');
    });
  
    it('should have a submit button', () => {
      cy.get('button[type="submit"]').should('be.visible');
    });
  
    it('should have a "Forgot Password" link', () => {
      cy.contains('Forgot Password').should('be.visible');
    });
  
    it('should have a "Register" link', () => {
      cy.contains('Register').should('be.visible');
    });
  });
  