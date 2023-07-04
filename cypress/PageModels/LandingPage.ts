export class LandingPage
{
    public GetButtonByTextAndClick(buttonText: string)
    {
        return cy.get("label").contains(buttonText).click(); 
    }
    public ClickNextButton() 
    { 
        return cy.get(".btn--next-section").click(); 
    }
}
export default new LandingPage