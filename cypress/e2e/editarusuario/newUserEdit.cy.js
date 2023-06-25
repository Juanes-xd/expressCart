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
        cy.get('[href="/admin/user/edit/648fbee077ce372748b79c62"]').click() 
        
    })

    it('test id 1.1', ()=> {

        cy.get('.list-group > :nth-child(1)').type('samir')
        cy.get('.list-group > :nth-child(2)').type('samir@gmail.com')
        cy.get('.list-group > :nth-child(3)').type('123456')
        cy.get('.list-group > :nth-child(4)').type('123456')
        cy.get('.list-group > :nth-child(1)').should('have.value','samir')
        cy.get('#btnUserEdit').click()
           
    })

    it('test id 1.2', ()=> {

        cy.get('.list-group > :nth-child(1)').type('8')
        cy.get('.list-group > :nth-child(2)').type('samir@gmail.com')
        cy.get('.list-group > :nth-child(3)').type('123456')
        cy.get('.list-group > :nth-child(4)').type('123456')
        cy.get('.list-group > :nth-child(1)').should('have.value','samir')
        cy.get('.list-group > :nth-child(1)').should('not.include.value','8')
        cy.get('#btnUserEdit').click()
           
    })

    it('test id 1.3', ()=> {

        cy.get('.list-group > :nth-child(1)').type('@')
        cy.get('.list-group > :nth-child(2)').type('samir@gmail.com')
        cy.get('.list-group > :nth-child(3)').type('123456')
        cy.get('.list-group > :nth-child(4)').type('123456')
        cy.get('.list-group > :nth-child(1)').should('not.have.value','@')
        cy.get('#btnUserEdit').click()
           
    })

    it('test id 1.4', ()=> {

        cy.get('.list-group > :nth-child(1)').type('')
        cy.get('.list-group > :nth-child(2)').type('samir@gmail.com')
        cy.get('.list-group > :nth-child(3)').type('123456')
        cy.get('.list-group > :nth-child(4)').type('123456')
        cy.get('.list-group > :nth-child(1)').should('not.have.value','')
        cy.get('#btnUserEdit').click()
           
    })

   

})