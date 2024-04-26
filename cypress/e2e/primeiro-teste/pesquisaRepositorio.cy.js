/// <reference types="cypress" />

describe('Acesso ao sistema e verificação da função de pesquisa', () => {
  
  before(() => {
    cy.viewport(1280, 700);
    cy.visit('https://localhost:44329')
    cy.wait(500)
  });

  it('pesquisar um item e ver seus detalhes', () => {
    cy.contains('Veja Outros Repositórios').click()
    cy.get('.btn-primary').should('be.visible')
    cy.get('.form-control').type("a")
    cy.get('.btn.btn-primary').click()
    cy.contains('INVERSE-OF-A-MATRIX')
    cy.contains("Detalhe").first().click()
    cy.screenshot('printscreen', { capture: 'viewport' })
  })

})
