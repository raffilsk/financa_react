describe('Forms user interface', () => {
   it('Deve carregar a página', () => {
      cy.visit('/')
   })

   /* Testes básicos a inserir

   it('Deve conter um h2 com Titulo Cadastrar Operação', () => {
      cy.visit('/')

      cy.get('h2')
      .should('contain','Cadastrar Operação')
   })

   it('Deve conter placeholder com o valor Titulo e value title', () => {
      cy.visit('/')

      cy.get('input[placeholder=Titulo]')
      .should('have.attr', 'value', 'title')
      .type("Criação de app")
   })

   it('Deve conter placeholder com o valor Categoria e value category', () => {
      cy.visit('/')

      cy.get('input[placeholder=Categoria]')
      .should('have.attr', 'value', 'category')
      .type("Job")
   })


   it('Deve ser do tipo número e placeholder escrito valor', () => {
      cy.visit('/')

      cy.get('input[type=number]')
      .should('have.attr', 'placeholder', 'valor')
      .type(3000)
   })

   it('Deve ter um button cdo tipo submit', () => {
      cy.visit('/')

      cy.get('button[type=submit]').click()
   })
   */
})