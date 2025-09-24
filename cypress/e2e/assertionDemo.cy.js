///<reference types="cypress" />

describe('Assertions demo', () => {

    it('Implicit assertions demo', () => {

        cy.visit("https://example.cypress.io/")
        cy.contains("get").click()

        //sholud - contain - have - be 
        cy.get('#query-btn').
            should('contain', 'Button').
            should('have.class', 'query-btn').
            should('be.visible').
            should('be.enabled')

        //should - invoke - equal
        cy.get('#query-btn').
            invoke('attr', 'id').
            should('equal', 'query-btn')

        // and 
        cy.get('#query-btn').
            should('contain', 'Button').
            and('have.class', 'query-btn')
    })

    it('Explicit assertions demo', () => {

        cy.visit("https://example.cypress.io/")
        cy.contains("get").click()

        cy.get('#query-btn').
            invoke('text').then((text) => {
               const buttonText = text.trim();
               expect(buttonText).to.be.equal('Button')
            })
         
        //expect - assert
        cy.get('h4').its('length').then(count => {
            expect(count).to.equal(5)
            assert.equal(count, 5, "Not equal")
        })

        
    })
})