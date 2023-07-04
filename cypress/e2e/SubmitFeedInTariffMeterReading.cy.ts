import { LandingPage } from "../PageModels/LandingPage";
import { AboutYouPage } from "../PageModels/AboutYouPage";
import { SubmitPage } from "../PageModels/SubmitPage";
import { ResultsPage } from "../PageModels/ResultsPage";
import { ErrorMessageConstants } from "cypress/Constants/ErrorMessageConstants";

const landingPage: LandingPage = new LandingPage();
const aboutYouPage: AboutYouPage = new AboutYouPage();
const submitPage: SubmitPage = new SubmitPage();
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

it("Invalid account number displays error message", () =>
{
  submitPage.CompleteSubmitForm("-1", "12", "1", "January", "2023", "1111");
  submitPage.AccountNumberErrorMessage().should('be.visible');
  submitPage.AccountNumberErrorMessage().should('have.text', ErrorMessageConstants.InvalidGeneratorAccountNumber);
})

it("No date entered displays error message", () => 
{
  submitPage.CompleteSubmitFormWithNoDate("12345", "12", "1");
  submitPage.DateOfReadingErrorMessage().should('be.visible');
  submitPage.DateOfReadingErrorMessage().should('have.text', ErrorMessageConstants.NoDateErrorMessage)
})

it("No meter serial number entered displays error message", () => 
{
  submitPage.CompleteSubmitFormWithNoMeterSerialNumber("12345","1", "January", "2023", "1111");
  submitPage.MeterSerialNumberErrorMessage().should('be.visible');
  submitPage.MeterSerialNumberErrorMessage().should('have.text', ErrorMessageConstants.NoSerialNumberErrorMessage)
})