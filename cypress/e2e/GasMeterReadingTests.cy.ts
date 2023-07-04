import { LandingPage } from "../PageModels/LandingPage";
import { AboutYouPage } from "../PageModels/AboutYouPage";
import { SubmitGasReadingPage } from "../PageModels/SubmitGasReadingPage";
import { ResultsPage } from "../PageModels/ResultsPage";
import { ErrorMessageConstants } from "../Constants/ErrorMessageConstants";

const landingPage: LandingPage = new LandingPage();
const aboutYouPage: AboutYouPage = new AboutYouPage();
const submitPage: SubmitGasReadingPage = new SubmitGasReadingPage();
const resultsPage: ResultsPage = new ResultsPage();

beforeEach(() => {
    cy.visit('https://www.goodenergy.co.uk/meter-reading/');
    landingPage.GetButtonByTextAndClick("Gas");
    landingPage.ClickNextButton();
    aboutYouPage.CompleteAboutYouForm("Alex", "alex@fake.com", "NR7 8RX");
   })

it("Submit gas reading and verify success", () => 
{
    submitPage.CompleteSubmitForm("12345678", "12", "1", "January", "2023","123456");
    resultsPage.SuccessMessageIsDisplayed();
})

describe("Validation tests", () => 
{
it("Invalid account number displays error message", () => 
{
    submitPage.AccountNumberInput().type("A").type("{enter}");
    submitPage.AccountNumberError().should('be.visible');
    submitPage.AccountNumberError().should('have.text', ErrorMessageConstants.InvalidGasAccountNumber)
})

it("Invalid meter serial number displays error message", () =>
{
    submitPage.MeterSerialNumberInput().type("-1").type("{enter}");
    submitPage.MeterSerialNumberError().should('be.visible');
    submitPage.MeterSerialNumberError().should('have.text', ErrorMessageConstants.InvalidMeterSerialNumber);
})

it("Invalid meter reading displays error message", () =>
{
    submitPage.MeterReadingInput().type("_").type("{enter}");
    submitPage.MeterReadingError().should('be.visible');
    submitPage.MeterReadingError().should('have.text', ErrorMessageConstants.MeterReadingMustBeNumber)
})

beforeEach(() =>
{
  submitPage.SubmitButton().click();
})

it("No account number displays error message", () =>
{
    submitPage.AccountNumberError().should('be.visible');
    submitPage.AccountNumberError().should('have.text', ErrorMessageConstants.NoGasAccountNumber)
})

it("No meter serial number displays error message", () =>
{
    submitPage.MeterSerialNumberError().should('be.visible');
    submitPage.MeterSerialNumberError().should('have.text', ErrorMessageConstants.NoGasMeterSerialNumber);
})

it("No date entered displays error message", () =>
{
    submitPage.DateOfReadingError().should('be.visible');
    submitPage.DateOfReadingError().should('have.text', ErrorMessageConstants.NoDateEntered);
})

it("No meter reading displays error message", () =>
{
    submitPage.MeterReadingError().should('be.visible');
    submitPage.MeterReadingError().should('have.text', ErrorMessageConstants.NoMeterReading);
})
})