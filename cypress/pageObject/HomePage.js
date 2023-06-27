class HomePage {
    getLogoIcon = () => cy.get('a[href="https://demoqa.com"]'); 
    getHomePageUrl = () => cy.url();
    getHomePageCardList = () => cy.get('.card');

    clickLogoIcon() {
        this.getLogoIcon().click();
        return this;
    };

    checkHomePageCardList() {
        return this.getHomePageCardList().then(($els) => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)
          });
    };

    clickEachCardList(ind) {
        this.getHomePageCardList().as('cardList');
        cy.get('@cardList').eq(ind).click();
        return cy.url();
    };
};
export default HomePage