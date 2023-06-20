
describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111")
          
    })

    it('test id UN', ()=> {

        cy.get(':nth-child(4) > .sidebar-link-addon').type('maletin')
        cy.get('#btn_search').click()
        cy.url('http://localhost:1111/search/maletin')
           
    })

    

})