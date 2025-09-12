# Sistema de Gestão VasquesJp - Testes Automatizados em Cypress

Este projeto contém a suíte de testes automatizados desenvolvidos em Cypress para o Sistema de Gestão VasquesJp. O objetivo é garantir a qualidade e o funcionamento das principais funcionalidades da aplicação de forma rápida e confiável.

## Sobre o Projeto

- **Tecnologia principal:** [Cypress](https://www.cypress.io/)
- **Linguagem:** JavaScript
- **Objetivo:** Automatizar cenários críticos de testes para validação de funcionalidades do sistema.

## Casos de Testes Automatizados

Abaixo estão exemplos de casos de testes que podem ser implementados com Cypress neste projeto. Adapte conforme os testes existentes:

### 1. Login de Usuário
- Verifica se o usuário consegue acessar o sistema com credenciais válidas.
- Garante que mensagens de erro aparecem para credenciais inválidas.

### 2. Cadastro de Novo Cliente
- Valida se o cadastro de clientes está funcionando corretamente.
- Testa campos obrigatórios e validações de formulário.

### 3. Edição de Dados do Cliente
- Confirma que é possível editar informações de um cliente existente.
- Testa o comportamento do sistema ao salvar alterações.

### 4. Exclusão de Cliente
- Verifica se a funcionalidade de exclusão está removendo clientes corretamente.
- Garante que alertas de confirmação são exibidos.

### 5. Listagem e Pesquisa de Clientes
- Testa a exibição da lista de clientes cadastrados.
- Valida o filtro/pesquisa por nome ou outros critérios.

### 6. Logout
- Confirma que o usuário consegue sair do sistema.
- Verifica o redirecionamento para a tela de login.

## Como Executar os Testes

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute os testes Cypress:
   ```bash
   npx cypress open
   ```
   ou
   ```bash
   npx cypress run
   ```

## Estrutura de Pastas

- `cypress/integration/` - Contém os arquivos dos cenários de testes.
- `cypress/fixtures/` - Dados de teste utilizados.
- `cypress/support/` - Funções auxiliares e comandos customizados.

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões de novos cenários de teste ou melhorias nos existentes.



---
*Projeto mantido por [Fernando-A-Ferraz](https://github.com/Fernando-A-Ferraz)*
