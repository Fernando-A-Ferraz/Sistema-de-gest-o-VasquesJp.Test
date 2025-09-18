Cypress.Commands.add('cadastrarCliente', (cliente) => {
  cy.get('.btn-primary').contains('Novo Cliente').click();
  cy.get('#customer-name').type(cliente.nome);
  cy.get('#customer-phone').type(cliente.telefone);
  if (cliente.cpf !== undefined) {
    cy.get('#customer-cpf').type(cliente.cpf);
  }
  cy.get('#customer-birthdate').type(cliente.nascimento);
});

// --- Command para login com sucesso ---
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://gestao.vasques.dev/login');
  cy.get('#email').type(email);
  cy.get('#password').type(senha);
  cy.get('.px-6 > .flex').click();
  cy.url().should('include', '/dashboard');
});