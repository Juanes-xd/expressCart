
describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111/admin")
        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(1) > :nth-child(4) > .nav-link').click()
        
        
    })

    it('test id 1', ()=> {
        cy.get('#product_filter').type('maletin')
        cy.get('#btn_product_filter').click
        cy.get('.list-group > :nth-child(2)').should('have.class','maletin')
        
           
    })

    it('test id 2', ()=> {
        cy.get('#product_filter').type('')
        cy.get('#btn_product_filter').click
        cy.get('.top-pad-8').should('not.have.value','')
        
           
    })

})