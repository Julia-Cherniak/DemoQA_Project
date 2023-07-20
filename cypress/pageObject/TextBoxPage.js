class TextBoxPage{
    getHeaderText = () => cy.get('.main-header');
    getFullNameInputField = () => cy.get('#userName');
    getUserEmailInputField = () => cy.get('#userEmail');
    getCurrentAdressInputField = () => cy.get('#currentAddress');
    getPermanentAdressInputField = () => cy.get('#permanentAddress');
    getSubmitBtn = () => cy.get('#submit');
    getOutputField = () => cy.get('#output');

    typeUserName(name){
        this.getFullNameInputField().type(name);
        return this;
    };

    typeUserEmail(email){
        this. getUserEmailInputField().type(email);
        return this;
    };

    typeCurrentAdress(currentAdress){
        this.getCurrentAdressInputField().type(currentAdress);
        return this;
    };

    typePermanentAdress(permanentAdress){
        this.getPermanentAdressInputField().type(permanentAdress);
        return this;
    };

    clickSubmitBtn(){
        this.getSubmitBtn().click()
        return this;
    };
};
export default TextBoxPage