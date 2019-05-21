Cypress.Commands.overwrite("visit", (visit: typeof cy.visit, url: string) => {
  console.log('### visit', visit, url);
  return visit(url, {
    onBeforeLoad: () => {
      console.log('### onBeforeLoad')
    }
  })
});
