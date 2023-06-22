
describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111")
          
    })

    it('test id SS', ()=> {

        cy.get(':nth-child(4) > .sidebar-link-addon').type('maletin')
        cy.get('#btn_search').click()
        cy.get(':nth-child(4) > .sidebar-link-addon').should('have.value','maletin')
        cy.url('http://localhost:1111/search/maletin')
           
    })

    it('test id SS', ()=> {

        cy.get(':nth-child(4) > .sidebar-link-addon').type('1234')
        cy.get('#btn_search').click()
        cy.get(':nth-child(4) > .sidebar-link-addon').should('not.have.value','1234')
        cy.url('http://localhost:1111/search/maletin')
           
    })

    it('test id SS', ()=> {

        cy.get(':nth-child(4) > .sidebar-link-addon').type('@maletin#')
        cy.get('#btn_search').click()
        cy.get(':nth-child(4) > .sidebar-link-addon').should('not.have.value','@maletin#')
        cy.url('http://localhost:1111/search/maletin')
           
    })

    it('test id SS', ()=> {

        cy.get(':nth-child(4) > .sidebar-link-addon').type('')
        cy.get('#btn_search').click()
        cy.get(':nth-child(4) > .sidebar-link-addon').should('not.have.value','')
        cy.url('http://localhost:1111/search/maletin')
           
    })

    

})