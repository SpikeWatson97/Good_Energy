import { LandingPage } from "../PageModels/LandingPage";
import { AboutYouPage } from "../PageModels/AboutYouPage";
import { SubmitFeedInTariffReadingPage } from "../PageModels/SubmitFeedInTariffReadingPage";
import { ResultsPage } from "../PageModels/ResultsPage";
import { ErrorMessageConstants } from "../Constants/ErrorMessageConstants";

const landingPage: LandingPage = new LandingPage();
const aboutYouPage: AboutYouPage = new AboutYouPage();
const submitPage: SubmitFeedInTariffReadingPage = new SubmitFeedInTariffReadingPage();
const resultsPage: ResultsPage = new ResultsPage();

beforeEach(() => {
  cy.visit('https://www.goodenergy.co.uk/meter-reading/');
  landingPage.GetButtonByTextAndClick("Feed-in Tariff");
  landingPage.ClickNextButton();
  aboutYouPage.CompleteAboutYouForm("Alex", "alex@fake.com", "NR7 8RX");
 })

it("Submit feed in tarrif reading and verify success", () =>
{
  submitPage.CompleteSubmitForm("12345", "12", "1", "January", "2023", "1111");
  resultsPage.SuccessMessageIsDisplayed();
})

describe("Validation tests", () => 
{
it("Invalid account number displays error message", () =>
{
  submitPage.GeneratorAccountNumberInput().type("-1").type("{enter}");
  submitPage.AccountNumberErrorMessage().should('be.visible');
  submitPage.AccountNumberErrorMessage().should('have.text', ErrorMessageConstants.InvalidGeneratorAccountNumber);
})

it("Invalid meter serial number displays error message", () =>
{
  submitPage.MeterSerialNumberInput().type("_").type("{enter}");
  submitPage.MeterSerialNumberErrorMessage().should('be.visible');
  submitPage.MeterSerialNumberErrorMessage().should('have.text', ErrorMessageConstants.InvalidMeterSerialNumber);
})

it("Invalid meter reading displays error message", () =>
{
  submitPage.MeterReadingInput().type("_").type("{enter}");
  submitPage.MeterReadingErrorMessage().should('be.visible');
  submitPage.MeterReadingErrorMessage().should('have.text', ErrorMessageConstants.EnterValidMeterReading)
})

//Causes 'no value' validation messages to appear for all fields
beforeEach(() =>
{
  submitPage.SubmitButton().click();
})

it("No generator account number displays error message", () =>
{
  submitPage.AccountNumberErrorMessage().should('be.visible');
  submitPage.AccountNumberErrorMessage().should('have.text', ErrorMessageConstants.NoGeneratorAccountNumber)
})

it("No meter serial number entered displays error message", () => 
{
  submitPage.MeterSerialNumberErrorMessage().should('be.visible');
  submitPage.MeterSerialNumberErrorMessage().should('have.text', ErrorMessageConstants.NoSerialNumber)
})

it("No date entered displays error message", () => 
{
  submitPage.DateOfReadingErrorMessage().should('be.visible');
  submitPage.DateOfReadingErrorMessage().should('have.text', ErrorMessageConstants.NoDateEntered)
})

it("No meter reading displays error message", () =>
{
  submitPage.MeterReadingErrorMessage().should('be.visible');
  submitPage.MeterReadingErrorMessage().should('have.text', ErrorMessageConstants.NoMeterReading)
})
})
