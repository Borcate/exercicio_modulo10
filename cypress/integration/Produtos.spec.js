/// <reference types="cypress" />

describe('Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/?product_cat=tops&s=&post_type=product')
    });

   // afterEach(() => {
   //     cy.screenshot()
  //  });

    it('Selecionar produto', () => {
        cy.get('[class="product-block grid"]')
            .eq(4)
            .contains('Sparta Gym Tank').click()
    });

    it('Adicionar produto no carrinho', () => {
        var quantidade = 20
        cy.get('[class="product-block grid"]').contains('Sparta Gym Tank').click()
        cy.get('.button-variable-item-L').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Sparta Gym Tank” foram adicionados no seu carrinho.')

        cy.get('.dropdown-toggle > .mini-cart-items').click()

    });

});