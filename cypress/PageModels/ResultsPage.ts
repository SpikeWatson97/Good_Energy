export class ResultsPage
{
    private SuccessMessage() { return cy.get(".form-success"); }

    public SuccessMessageIsDisplayed() : boolean
    {
        if (this.SuccessMessage().should('contain.text', 'Meter read submitted'))
        {
            return true;
        }
        return false;
    }
}