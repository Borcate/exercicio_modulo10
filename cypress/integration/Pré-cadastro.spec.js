/// <reference types="cypress" />
var faker = require('faker');

context('Realizar cadastro no sistema', () => {

    it('Cadastro', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Cadastrar + Preencher cadastro', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@teste123456')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').click()

    });

});