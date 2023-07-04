export class SubmitGasReadingPage
{
    //Inputs
    public AccountNumberInput() { return cy.get("#GasAccountNumber"); }
    public MeterSerialNumberInput() { return cy.get("#GasMeterSerialNumber"); }
    public MeterReadingInput() { return cy.get("#GasMeterReadingValue"); }

    //Error messages
    public AccountNumberError() { return cy.get("[data-valmsg-for='GasAccountNumber']"); }
    public MeterSerialNumberError() { return cy.get("[data-valmsg-for='GasMeterSerialNumber']")};
    public MeterReadingError() { return cy.get("[data-valmsg-for='GasMeterReadingValue']"); }
    public DateOfReadingError() { return cy.get("[data-valmsg-for='GasDateOfReading']")};
    
    //Buttons
    public SubmitButton() { return cy.get(".btn--submit"); }

    //Dropdowns
    private DayDateOfReadingDropdown() { return cy.get("#GasDateOfReading_Value_Day"); }
    private MonthDateOfReadingDropdown() { return cy.get("#GasDateOfReading_Value_Month"); }
    private YearDateOfReadingDropdown() { return cy.get("#GasDateOfReading_Value_Year"); }
    
    //Methods
    public CompleteSubmitForm(accountNumber: string, meterSerialNumber: string, day: string, month: string, year: string, meterReading: string )
    {
        this.AccountNumberInput().type(accountNumber).should('have.value', accountNumber);
        this.MeterSerialNumberInput().type(meterSerialNumber).should('have.value', meterSerialNumber);
        this.DayDateOfReadingDropdown().select(day).should('contain.text', day);
        this.MonthDateOfReadingDropdown().select(month).should('contain.text', month);
        this.YearDateOfReadingDropdown().select(year).should('contain.text', year);
        this.MeterReadingInput().type(meterReading).should('have.value', meterReading);
        this.SubmitButton().click();
    }
}
export default new SubmitGasReadingPage