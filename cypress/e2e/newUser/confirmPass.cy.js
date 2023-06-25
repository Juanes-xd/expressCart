
describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111/admin")
        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('.float-right > .btn').click() 
        
    })
it('test id CP1', ()=> {

    cy.get('#usersName').type('samir')
    cy.get('#userEmail').type('samir@gmail.com')
    cy.get('#userPassword').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
    cy.get('#usersName').should('have.value','samir')
    cy.get('#btnUserAdd').click()
       
})

it('test id CP2', ()=> {

    cy.get('#usersName').type('samir')
    cy.get('#userEmail').type('samir@gmail')
    cy.get('#userPassword').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
    cy.get('#usersEmail').should('have.value','com')
    cy.get('#btnUserAdd').click()
       
})

it('test id CP3', ()=> {

    cy.get('#usersName').type('samir')
    cy.get('#userEmail').type('samir@gmail.com')
    cy.get('#userPassword').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
    cy.get('#usersEmail').should('not.have.keys','@')
    cy.get('#btnUserAdd').click()
       
})

it('test id CP4', ()=> {

    cy.get('#usersName').type('samir')
    cy.get('#userEmail').type('')
    const ps = cy.get('#userPassword').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').should('have.value','ps')
    cy.get('#btnUserAdd').click()
       
})

it('test id CP4', ()=> {

    cy.get('#usersName').type('samir')
    cy.get('#userEmail').type('carlos@gmail.com')
    cy.get('#userPassword').type('123456')
    cy.get('#userNewForm > :nth-child(4) > .form-control').type('')
    cy.get('#userNewForm > :nth-child(4) > .form-control').should('not.have.value','')
    cy.get('#btnUserAdd').click()
       
})
})