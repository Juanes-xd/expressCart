beforeEach("newProduct", ()=> {
    cy.visit("http://localhost:1111/admin")
    cy.get('#email').type('rzagza039@gmail.com')
    cy.get('#password').type('**039##')
    cy.get('#loginForm').click()
    cy.get(':nth-child(4) > .sidebar-link-addon').click({force: true})
    //cy.get('.float-right > .btn').click() 
    


it('test id Title', ()=> {

    cy.get(':nth-child(4) > .sidebar-link-addon',{force: true}).type('carlos')
       
})

})