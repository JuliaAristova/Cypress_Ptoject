///<reference types="cypress" />
describe('Test with added timeout', () => {

  it('add Timeout test', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]', { timeout: 5000 }).click()
    cy.wait(4000)
    cy.contains('Sauce Labs Backpack').click()
  })
})