export class SubmitPage
{
    private GeneratorAccountNumberInput() { return cy.get("#FitAccountNumber"); }
    private MeterSerialNumberInput() { return cy.get("#FitMeterSerialNumber"); }
    private DayDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Day"); }
    private MonthDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Month"); }
    private YearDateOfReadingDropdown() { return cy.get("#FitDateOfReading_Value_Year");}
    private MeterReadingInput() { return cy.get("#FitMeterReadingValue"); }
    private SubmitButton() { return cy.get(".btn--submit"); }
    public AccountNumberErrorMessage() { return cy.get("#FitAccountNumber-error"); }
    public DateOfReadingErrorMessage() { return cy.get("[data-valmsg-for='FitDateOfReading']"); }
    public MeterSerialNumberErrorMessage() { return cy.get("[data-valmsg-for='FitMeterSerialNumber']"); }
    
    public CompleteSubmitForm(accountNumber: string, meterSerialNumber: string, day: string, month: string, year: string,
     meterReading: string)
    {
        this.GeneratorAccountNumberInput().type(accountNumber);
        this.MeterSerialNumberInput().type(meterSerialNumber);
        this.DayDateOfReadingDropdown().select(day.toString());
        this.MonthDateOfReadingDropdown().select(month.toString());
        this.YearDateOfReadingDropdown().select(year.toString());
        this.MeterReadingInput().type(meterReading);
        this.SubmitButton().click();
    }

    public CompleteSubmitFormWithNoDate(accountNumber: string, meterSerialNumber: string, meterReading: string)
       {
           this.GeneratorAccountNumberInput().type(accountNumber);
           this.MeterSerialNumberInput().type(meterSerialNumber);
           this.MeterReadingInput().type(meterReading);
           this.SubmitButton().click();
       }

       public CompleteSubmitFormWithNoMeterSerialNumber(accountNumber: string, day: string, month: string, year: string, meterReading: string)
       {
           this.GeneratorAccountNumberInput().type(accountNumber);
           this.DayDateOfReadingDropdown().select(day.toString());
           this.MonthDateOfReadingDropdown().select(month.toString());
           this.YearDateOfReadingDropdown().select(year.toString());
           this.MeterReadingInput().type(meterReading);
           this.SubmitButton().click();
       }
}
export default new SubmitPage