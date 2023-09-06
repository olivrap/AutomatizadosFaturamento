/// <reference types="Cypress" />
import 'cypress-iframe'

const filename = 'cypress/downloads/dataRecebimentoCaixa.json';
var amostra;

describe('login Lis', () => {

  it('login LIS', () => {
    cy.on('uncaught:exception', () => false);
    cy.writeFile(filename, {});
    cy.visit('https://lishomol.grupopardini.com.br/HPardini.Basico.Pagina.LoginLoja.cls?CSPCHD=001002010000hgCylFpkxF07vnun2GJCY88xKEu3kXMwlhS6Fe&');
    cy.get('#control_14').type('jackson.linzmaier');
    cy.get('#control_16').type('s44Xepx6y3E*(');
    cy.get('#control_16').type('{enter}');
    cy.get('.principal').type('{enter}').should('be.visible');
    cy.get('#zenLayoutTableCell_6').click();
    cy.get('#boxPesquisa').type('script').type('{enter}');
    cy.contains('Gerar Script').click();
	
    // Carregar conteúdo (cy.iframe('iframe[id=iframe_41]') = get para interação)
    cy.frameLoaded('iframe[id=iframe_41]');
	
    // Preenchimento campo convenio
    cy.iframe('iframe[id=iframe_41]').should('be.visible').find('[id=btnModal_13]').click();
    cy.iframe('iframe[id=iframe_41]').tab().type('7202').type('{enter}',{force: true}); 
    cy.iframe('iframe[id=iframe_41]').contains('VALE SA').click();

    // Preenchimento campo plano
    cy.iframe('iframe[id=iframe_41]').should('be.visible').find('[id=btnModal_15]').click();
    cy.iframe('iframe[id=iframe_41]').type('CVRD').type('{enter}',{force: true});
    cy.iframe('iframe[id=iframe_41]').contains('CVRD').click();
    cy.iframe('iframe[id=iframe_41]').contains('CVRDP').click();
    cy.getIframeBody('iframe[id=iframe_41]').find('#zenFloatingDiv_48').invoke('css', 'display', 'none');

    // Campos de data inicial e final
    cy.iframe('iframe[id=iframe_41]').find('input[id=control_17]').click({force: true}).type('09082023',{force: true}).type('{enter}', {force: true});
    cy.iframe('iframe[id=iframe_41]').find('input[id=control_19]').click({force: true}).type('10082023',{force: true}).type('{enter}', {force: true});
    cy.iframe('iframe[id=iframe_41]').find('input[id=control_22]').click({force: true});
    cy.get('body').type('{enter}', {force: true});
    cy.log(amostra);
  });
});