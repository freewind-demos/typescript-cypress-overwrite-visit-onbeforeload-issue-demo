Cypress.Commands.overwrite("visit", (visit: typeof cy.visit, url: string) => {
  console.log('### visit', visit, url);
  visit(url, {
    onBeforeLoad: () => {
      console.log('### onBeforeLoad')
    }
  })
});
