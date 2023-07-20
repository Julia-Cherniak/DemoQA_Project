/// <reference types="cypress" />
import HomePage from "../pageObject/HomePage";
import textBoxPageData from "../fixtures/textBoxPage.json";

describe('textBoxPage', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    });

    it('AT.003.001 Verify user can see text in header', () => {
        homePage
            .clickElementsCard()
            .clickTextBoxLink()
            .getHeaderText()
            .should('be.visible')
            .should('have.text', textBoxPageData.textHeader)
    });

    it('AT.003.002 Verify user can fill in the text-box form', () => {
        homePage
            .clickElementsCard()
            .clickTextBoxLink()
            .typeUserName(textBoxPageData.fullName)
            .typeUserEmail(textBoxPageData.email)
            .typeCurrentAdress(textBoxPageData.currentAdress)
            .typePermanentAdress(textBoxPageData.permanentAdress)
            .clickSubmitBtn()
            .getOutputField()
            .should('exist');
    });
});