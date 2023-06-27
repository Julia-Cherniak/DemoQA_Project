/// <reference types="cypress" />
import HomePage from "../pageObject/HomePage";
import homePageData from "../fixtures/homePage.json";

describe('homePage', ()  => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    });

    it('AT.001.001 Verify that Logo Icon is clickable', () => {
        homePage
            .clickLogoIcon()
            .getHomePageUrl()
            .should('eq', homePageData.homePageUrl);
    });

    it('AT.001.002 Verify the avalidity of all cards on the page and length of this cards', () => {
        homePage
            .checkHomePageCardList()
            .should('deep.equal', homePageData.listOfCards)
            .and('have.length', homePageData.listOfCards.length);
    });

    homePageData.listOfCards.forEach((pageName, ind) => {
        it(`AT.001.003 Verify user can click on each cards and be redirected to the ${pageName} page`, function() {
            homePage
                .clickEachCardList(ind)
                .should('contain', homePageData.endPointUrl[ind])
                .should('contain', homePageData.endPointUrl[ind])
            });
    });
});