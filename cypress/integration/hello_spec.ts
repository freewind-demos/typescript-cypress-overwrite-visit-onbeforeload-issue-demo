describe('cypress', () => {
  it('should using overrode cy.visit correctly', () => {
    cy.visit('https://example.cypress.io/');

    // if you comment the following line, `onBeforeLoad` in overrode visit will run
    cy.title().should('equal', 'Cypress.io: Kitchen Sink')
  })
})
