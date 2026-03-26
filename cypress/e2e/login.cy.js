describe('Fluxo de Autenticação - Sauce Demo', () => {
  
  beforeEach(() => {
    // Acessa o site antes de cada teste
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve realizar login com sucesso e validar a página de produtos', () => {
    // Usando o comando reutilizável que criamos no Passo 3
    cy.login('standard_user', 'secret_sauce');

    // Validação (Assertion)
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('be.visible').and('have.text', 'Products');
  });

  it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.login('usuario_errado', 'senha_errada');

    // Validação do erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});