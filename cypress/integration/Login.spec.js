/// <reference types="cypress" />

context('Realizar login no sistema', () => {

    it('fazer login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

   // afterEach(() => {
    //    cy.screenshot()
    //});

    it('Realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    });

    it('Senha inválida - Falha ao realizar login', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

    it('Email invalido - Falha ao realizar login', () => {
        cy.get('#username').clear().type('janaina@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')

    });

});

    