///<reference types="cypress"/>

describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('https://gestao.vasques.dev/login');
  });

  it('Deve fazer login com sucesso', () => {
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
    cy.get('button.bg-gray-600').contains('Sair').click();
  });

  it('Não deve logar com senha inválida', () => {
    cy.get('#email').type(Cypress.env('USER_EMAIL'));
    cy.get('#password').type('senhaerrada');
    cy.get('.px-6 > .flex').click();
    cy.url().should('include', '/login');
    cy.contains('Credenciais inválidas').should('be.visible');
  });

  it('Não deve logar com usuário inexistente', () => {
    cy.get('#email').type('fakeuser@vasques.dev');
    cy.get('#password').type('123456');
    cy.get('.px-6 > .flex').click();
    cy.url().should('include', '/login');
    cy.contains('Credenciais inválidas').should('be.visible');
  });

  it('Não deve logar com campos vazios', () => {
    cy.get('.px-6 > .flex').click();
    cy.get('input[type="email"]').should('have.prop', 'validationMessage').and('eq', 'Preencha este campo.');
  });

  it('Não deve logar com email inválido', () => {
    cy.get('#email').type('susp@vasques.dev');
    cy.get('#password').type('123456');
    cy.get('.px-6 > .flex').click();
    cy.contains('Credenciais inválidas. Verifique e-mail e senha.').should('be.visible');
  });

  it('Deve exibir/esconder senha ao clicar no botão', () => {
    cy.get('#email').type(Cypress.env('USER_EMAIL'));
    cy.get('#password').type(Cypress.env('USER_PASSWORD'));

    // Clica no botão para mostrar a senha
    cy.get('#password').parent().find('button').click();
    cy.get('#password').should('have.attr', 'type', 'text');

    // Clica novamente para esconder a senha
    cy.get('#password').parent().find('button').click();
    cy.get('#password').should('have.attr', 'type', 'password');
  });
});