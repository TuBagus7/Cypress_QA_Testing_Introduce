describe('login Linkedin Testing', () => {
  it.only('harus bisa masuk login', () => {
    cy.visit('https://www.linkedin.com/home')
    cy.get('.nav__button-secondary').click()
    cy.get('#username').type('#usarname')
    cy.get('#password').type('#password')
    cy.get('.btn__primary--large').click()
  })
})