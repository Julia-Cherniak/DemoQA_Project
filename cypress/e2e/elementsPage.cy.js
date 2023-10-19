/// <reference types="cypress" />
import HomePage from "../pageObject/HomePage";
import elementsPageData from "../fixtures/elementsPage.json";

describe('elementsPage', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    });

    elementsPageData.listsOfElements.forEach((pageName, ind) => {
        it(`AT.002.001 Verify user can click on each elements and be redirected to the ${pageName} page`, function () {
            homePage
                .clickElementsCard()
                .clickEachElementsLists(ind)
                .should('contain', elementsPageData.endPointUrlElements[ind]);
        });
    });

    it('AT.002.002 After clicking on Elements card user can sees appropriate text on the right side', () => {
        homePage
            .clickElementsCard()
            .getElementsPageText()
            .should('have.text', elementsPageData.elementsPageText);
    });
});