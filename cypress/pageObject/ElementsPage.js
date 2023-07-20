import TextBoxPage from "./TextBoxPage";

class ElementsPage{
    getElementsLists = () => cy.get('.element-list.collapse.show > ul > li');
    getElementsPageText = () => cy.get('.col-12.mt-4.col-md-6');
    getTextBoxLink = () => cy.get('.element-list.collapse.show > ul > li:first-child');

    clickEachElementsLists(ind){
        this.getElementsLists().as('elementsLists');
        cy.get('@elementsLists').eq(ind).click();
        return cy.url();
    };

    clickTextBoxLink(){
        this.getTextBoxLink().click();
        return new TextBoxPage();
    };

};
export default ElementsPage