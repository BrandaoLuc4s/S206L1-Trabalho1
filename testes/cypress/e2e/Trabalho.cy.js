/// <reference types="cypress"/>

describe('Criando cenário de teste para o site engoo', () => {

  it('Caso de teste: Testando a seleção de Materiais', ()=> {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('[href="/app/materials"]').click()
    cy.get('.css-4rnjer').contains('materiais')
  })

  it('Caso de teste: Tentando registrar um usuário no site com falha(nao aceitar os termos de serviço e Politíca de privacidade) e conferir se o a mensagem de erro aparece(Você deve concordar com os termos de serviço para criar uma conta.)', () => {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('.css-n46xqd').click()
    cy.get('.menu-list > .menu-list-main > .menu-list-item-btn-wrap > .menu-list-item-btn').click()
    cy.get(':nth-child(1) > .css-j7qwjs > .css-q72siy > .css-1ptup2w > :nth-child(1) > .css-1ilyui9 > .css-cgadzw').type('Inatel')
    cy.get(':nth-child(2) > .css-j7qwjs > .css-q72siy > .css-1ptup2w > :nth-child(1) > .css-1ilyui9 > .css-cgadzw').type('Inatel')
    cy.get(':nth-child(3) > .css-j7qwjs > .css-q72siy > .css-1ptup2w > :nth-child(1) > .css-1ilyui9 > .css-cgadzw').type('AlunoInatel@gmail.com')
    cy.get('#label-6').type('Inatel123')
    cy.get('.css-4sx06v > .css-10nd7in > .css-o1s4s7').click()
    cy.get(':nth-child(6) > .css-q72siy > :nth-child(2) > .css-uhayaa').should('have.text', 'Você deve concordar com os termos de serviço para criar uma conta.')
  })
 
  it('Caso de teste: Testanto o mecanismo de busca para os textos não encontrados, refente a palavra pesquisada)', () => {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('.css-1gdc72y').type('Inatel{enter}')
    cy.get('.css-uvdrtt > div').should('have.text', 'Nenhum artigo encontrado')
  })

  it('Caso de teste: Testanto se o primeiro texto encontrado possui a palavra desejada do mecanismo de pesquisa)', () => {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('.css-1gdc72y').type('History{enter}')
    cy.get('[aria-posinset="1"] > .css-1cq4ev9 > .css-4wjzy7 > .css-abdkt1 > .css-i9gxme > .css-10nnemh > .css-l5xv05 > .css-17poqz3 > .css-1f4k4h7').contains('History')
  })

  it('Caso de teste: Testando se o genero textual do texto está correto)', ()=> {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('.css-1gdc72y').type('A Short History of the FIFA World Cup{enter}')
    cy.get('.css-xah9so').click()
    cy.get('.css-1am3cs1').should('have.text', 'Culture & Entertainment')
  })

  it('Caso de teste: Testando o botão de pronuncia da palavra(protest)', ()=> {
    cy.visit('https://engoo.com.br/app/daily-news')
    cy.get('.css-1gdc72y').type('Nelson Mandelas Fight for Freedom{enter}')
    cy.get('.css-naezkm').click()
    cy.get(':nth-child(2) > .css-15830to > .css-xql8u4 > .css-19a4ne0 > .css-1iy583d').click()
  })
})

