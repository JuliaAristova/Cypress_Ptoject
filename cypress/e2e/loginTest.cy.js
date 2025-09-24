///<reference types="cypress" />
describe('Navigage and Login test', () => {

  it('navigate an login', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
  })
})