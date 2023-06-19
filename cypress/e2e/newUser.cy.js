Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111/admin")
        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('.float-right > .btn').click() 
        
    })

    it('test id pq1', ()=> {

        cy.get('#usersName')
        cy.get('#userEmail')
        cy.get('#userPassword')
        cy.get('#userNewForm > :nth-child(4) > .form-control')
        cy.get('#btnUserAdd')

    })
})