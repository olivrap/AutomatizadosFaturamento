/// <reference types="Cypress" />

const filename = 'cypress/downloads/dataRecebimentoCaixa.json'
//const dayjs = require('dayjs'); // função para pegar o dia de hoje

var amostra

describe('login Lis', () => {


  it('login LIS', () => {
    cy.on('uncaught:exception', () => false)
    cy.writeFile(filename, {  })
    cy.visit('https://lishomol.grupopardini.com.br/HPardini.Basico.Pagina.LoginLoja.cls?CSPCHD=001002010000hgCylFpkxF07vnun2GJCY88xKEu3kXMwlhS6Fe&')
    cy.get('#control_14').type('jackson.linzmaier')
    cy.get('#control_16').type('s44Xepx6y3E*(')
    cy.get('#control_16').type('{enter}')
    cy.get('.principal').type('{enter}').wait(500)
    cy.get('#zenLayoutTableCell_6').click()
    cy.get('#boxPesquisa').type('script').type('{enter}')
    cy.contains('Gerar Script').click()
     //cy.iframe('iframe[id=iframe_41]')
     //.find('input[id=btnModal_13]').click()
     //cy.iframe('iframe[id=iframe_41]')
     //.find('input[id=plano]').type('SULA')

    cy.log(amostra)
     })
 })