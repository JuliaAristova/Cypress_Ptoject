///<reference types="cypress" />
describe('Navigage and Login test', () => {

  it('navigate an login', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type("admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('.oxd-button').click()

    // admin
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //my info
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    //contact details
    cy.get(':nth-child(2) > .orangehrm-tabs-item').click()
  })
})