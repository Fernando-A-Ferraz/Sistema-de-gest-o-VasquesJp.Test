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
  
  // Aguarda a página realmente carregar
  cy.url().should('include', '/login');
  
  // Espera o campo de e-mail aparecer (até 10 segundos)
  cy.get('#email', { timeout: 10000 })
    .should('be.visible')
    .type(email);

  cy.get('#password').should('be.visible').type(senha);
  cy.get('.px-6 > .flex').click();

  // Confirma que chegou ao dashboard
  cy.url({ timeout: 10000 }).should('include', '/dashboard');
});