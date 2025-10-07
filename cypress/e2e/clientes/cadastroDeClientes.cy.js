///<reference types="cypress"/>
import { faker } from '@faker-js/faker';


function gerarCPFValido() {
  function random(n) {
    return Math.floor(Math.random() * n);
  }
  let n = [];
  for (let i = 0; i < 9; i++) n[i] = random(10);

  let d1 = 0;
  for (let i = 0; i < 9; i++) d1 += n[i] * (10 - i);
  d1 = 11 - (d1 % 11);
  if (d1 >= 10) d1 = 0;

  let d2 = 0;
  for (let i = 0; i < 9; i++) d2 += n[i] * (11 - i);
  d2 += d1 * 2;
  d2 = 11 - (d2 % 11);
  if (d2 >= 10) d2 = 0;

  return `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${d1}${d2}`;
}

function gerarClienteFake() {
  return {
    nome: faker.person.fullName(),
    telefone: `11${faker.phone.number('9########')}`,
    cpf: gerarCPFValido(),
    nascimento: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().slice(0, 10)
  };
}

describe('Cadastro de Cliente', () => {
  before(() => {
    
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
  });

  // Garante que cada teste começa na página desejada
  beforeEach(() => {
    cy.visit('https://gestao.vasques.dev/clientes');
  });
  it('Deve cadastrar cliente com campos obrigatórios preenchidos', () => {
    const cliente = gerarClienteFake();
    cy.cadastrarCliente(cliente);
    cy.get('.justify-end > .btn-primary').click();
    cy.contains('Cliente cadastrado com sucesso').should('be.visible');
  });

  it('Deve validar formato do telefone', () => {
    const cliente = gerarClienteFake();
    cliente.telefone = '119876543'; // Telefone inválido
    cy.cadastrarCliente(cliente);
    cy.contains('Telefone deve ter 10 ou 11 dígitos.').should('be.visible');
  });

  it('Cadastro sem CPF', () => {
    const cliente = gerarClienteFake();
    delete cliente.cpf;
    cy.cadastrarCliente(cliente);
    cy.get('.justify-end > .btn-primary').click();
    cy.contains('Cliente cadastrado com sucesso').should('be.visible');
  });

  it('Validação de formato de CPF', () => {
    const cliente = gerarClienteFake();
    cliente.cpf = '12345678'; // CPF inválido
    cy.cadastrarCliente(cliente);
    cy.contains('CPF inválido').should('be.visible');
  });

  it('Cancelar cadastro', () => {
    const cliente = gerarClienteFake();
    cy.cadastrarCliente(cliente);
    cy.get('.btn-secondary').click();
    cy.get('#customer-name').should('not.exist');
    cy.contains(cliente.nome).should('not.exist');
  });
});