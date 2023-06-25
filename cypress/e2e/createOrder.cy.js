
describe("createOrder", ()=> {


    
    beforeEach("newOrder", ()=> {
        cy.visit("http://localhost:1111/admin")
        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(5) > .sidebar-link-addon').click({force: true})
        //cy.get('.float-right > .btn').click() 
        
    })

    it('FN', ()=> {
  
        cy.get('#orderFirstName').type("samir")
        cy.get('#orderLastName').type("ramos")  
    })

    it('FN', ()=> {
  
        cy.get('#orderFirstName').type("123")
        cy.get('#orderLastName').type("ramos") 
        cy.get('#orderFirstName').should('not.have.value','123') 
    })

    it('FN', ()=> {
  
        cy.get('#orderFirstName').type("#@$")
        cy.get('#orderLastName').type("ramos")  
        cy.get('#orderFirstName').should('not.have.value','#@$')
    })

    it('FN', ()=> {
  
        cy.get('#orderFirstName').type("")
        cy.get('#orderLastName').type("ramos") 
        cy.get('#orderFirstName').should('not.have.value','') 
    })

    it('LN', ()=> {
  
        cy.get('#orderFirstName').type("samir")
        cy.get('#orderLastName').type("ramos") 
        cy.get('#orderLastName').should('have.value','ramos') 
    })

    it('LN', ()=> {
  
        cy.get('#orderFirstName').type("samir")
        cy.get('#orderLastName').type("123") 
        cy.get('#orderLastName').should('have.value','123') 
    })

    it('LN', ()=> {
  
        cy.get('#orderFirstName').type("samir")
        cy.get('#orderLastName').type("#@$") 
        cy.get('#orderLastName').should('not.have.value','#@$') 
    })

    it('LN', ()=> {
  
        cy.get('#orderFirstName').type("samir")
        cy.get('#orderLastName').type("") 
        cy.get('#orderLastName').should('not.have.value','') 
    })


})