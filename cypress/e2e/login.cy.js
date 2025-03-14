/// <reference types="cypress"/>

// funcionalidade
describe('Login', () => {

    const tela = ['iphone-8', 'iphone-x', 'macbook-16']

        tela.forEach(element => {
            
        beforeEach(() => {
             // Dado
            cy.viewport(element)
            cy.visit('/login')

        })


    // cenário de teste 1
    it(`Login com senha errada - ${element}`, () => {

        // Dado
        cy.get('#user').type('lucas@qazando.com')
        cy.get('#password').type('12345')
        cy.get('#materialUnchecked').check()

        // Quando
        cy.get('#btnLogin').click()

        // Então
        cy.get('.invalid_input')
            .should('have.text', 'Senha inválida.')
            .should('be.visible')
    })

    // cenário de teste 2

    it(`Login com e-mail errado - ${element}`, () => {

        // Dado
        cy.get('#user').type('xpto')
        cy.get('#password').type('123456')
        cy.get('#materialUnchecked').check()

        // Quando
        cy.get('#btnLogin').click()

        // Então
        cy.get('.invalid_input')
            .should('have.text', 'E-mail inválido.')
            .should('be.visible')
    })


    // cenário de teste 3

    it(`Login com senha vazia - ${element}`, () => {

        // Dado
        cy.get('#user').type('lucas@qazando.com')
        cy.get('#materialUnchecked').check()

        // Quando
        cy.get('#btnLogin').click()

        // Então
        cy.get('.invalid_input')
            .should('have.text', 'Senha inválida.')
            .should('be.visible')
    })

       // cenário de teste 4

       it(`Login com e-mail vazio - ${element}`, () => {

        // Dado
        cy.get('#password').type('123456')
        cy.get('#materialUnchecked').check()

        // Quando
        cy.get('#btnLogin').click()

        // Então
        cy.get('.invalid_input')
            .should('have.text', 'E-mail inválido.')
            .should('be.visible')
    })
    
       // cenário de teste 5

       it(`Login com campos vazio - ${element}`, () => {

        // Dado
        cy.get('#materialUnchecked').check()

        // Quando
        cy.get('#btnLogin').click()

        // Então
        cy.get('.invalid_input')
            .should('have.text', 'E-mail inválido.')
            .should('be.visible')
    })
});
})
