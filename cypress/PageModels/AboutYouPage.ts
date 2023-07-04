export class AboutYouPage
{
    private NameInput() { return cy.get("#Name"); }
    private EmailInput() { return cy.get("#Email"); }
    private PostcodeInput() { return cy.get("#Postcode"); }
    private NextButton() { return cy.get(".btn--next-section"); }

    public CompleteAboutYouForm(name: string, email: string, postcode: string)
    {
        this.NameInput().type(name).should('have.value', name)
        this.EmailInput().type(email).should('have.value', email)
        this.PostcodeInput().type(postcode).should('have.value', postcode)
        this.NextButton().click();
    }
}
export default new AboutYouPage 