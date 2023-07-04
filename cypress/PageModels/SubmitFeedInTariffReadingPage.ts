export class SubmitFeedInTariffReadingPage
{
    //Inputs
    public GeneratorAccountNumberInput() { return cy.get("#FitAccountNumber"); }
    public MeterSerialNumberInput() { return cy.get("#FitMeterSerialNumber"); }
    public MeterReadingInput() { return cy.get("#FitMeterReadingValue"); }
    
    //Error messages
    public AccountNumberErrorMessage() { return cy.get("#FitAccountNumber-error"); }
    public DateOfReadingErrorMessage() { return cy.get("[data-valmsg-for='FitDateOfReading']"); }
    public MeterSerialNumberErrorMessage() { return cy.get("[data-valmsg-for='FitMeterSerialNumber']"); }
    public MeterReadingErrorMessage() { return cy.get("[data-valmsg-for='FitMeterReadingValue']"); }

    //Buttons
    public SubmitButton() { return cy.get(".btn--submit"); }

    //Dropdowns
    private DayDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Day"); }
    private MonthDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Month"); }
    private YearDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Year");}
    
    //Methods
    public CompleteSubmitForm(accountNumber: string, meterSerialNumber: string, day: string, month: string, year: string,
     meterReading: string)
    {
        this.GeneratorAccountNumberInput().type(accountNumber).should('have.value', accountNumber);
        this.MeterSerialNumberInput().type(meterSerialNumber).should('have.value', meterSerialNumber);
        this.DayDateOfReadingDropdown().select(day.toString()).should('contain.text', day);
        this.MonthDateOfReadingDropdown().select(month.toString()).should('contain.text', month);
        this.YearDateOfReadingDropdown().select(year.toString()).should('contain.text', year);
        this.MeterReadingInput().type(meterReading).should('have.value', meterReading);
        this.SubmitButton().click();
    }
}
export default new SubmitFeedInTariffReadingPage