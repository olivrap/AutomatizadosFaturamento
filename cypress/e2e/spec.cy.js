/// <reference types="Cypress" />
import 'cypress-iframe'

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
     
//carregar conteudo iframe_41
    cy.frameLoaded('iframe[id=iframe_41]')
//Preenchimento campo convenio
    cy.iframe('iframe[id=iframe_41]').wait(1500)
      .find('[id=btnModal_13]').click()
      cy.iframe('iframe[id=iframe_41]').tab().type('7202').type('{enter}',{force: true}) //cy.iframe('iframe[id=iframe_41]') = get para interação
      cy.wait(500)
      cy.iframe('iframe[id=iframe_41]').contains('VALE SA').click()
//Preenchimento campo plano
    cy.iframe('iframe[id=iframe_41]').wait(500)
      .find('[id=btnModal_15]').click()
     cy.iframe('iframe[id=iframe_41]').type('CVRD').type('{enter}',{force: true}) //cy.iframe('iframe[id=iframe_41]') = get para interação
      cy.wait(500)
      cy.iframe('iframe[id=iframe_41]').contains('CVRD').click()
      cy.iframe('iframe[id=iframe_41]').contains('CVRDP').click().wait(500)
        cy.get('#zenMouseTrap').click(0, 0, {force: true})
        //cy.iframe('iframe[id=iframe_41]').get("#zenMouseTrap").click(150,150,{force: true})
        //cy.iframe('iframe[id=iframe_41]').find('input[id=control_17]').type('01082023',{force: true}).type('{enter}', {force: true})

//Preenchimento campo data inicial
    cy.log(amostra)
     })
 })