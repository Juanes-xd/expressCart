
describe("newUser", ()=> {
    it("ueser created", ()=> {
        cy.visit("http://localhost:1111/admin/user/new")
        cy.get('#usersName').type("carlos")
        cy.get('#userEmail').type("carlos@correo")
        cy.get('#userPassword').type(("123"))
        cy.get('#userNewForm > :nth-child(4) > .form-control').type("123")
        cy.get('#btnUserAdd').click()

    })
})