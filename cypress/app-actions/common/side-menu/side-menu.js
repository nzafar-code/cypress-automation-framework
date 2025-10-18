const mainPatientTab = '[id="patient-tab-main"]';

const mainSchedulerTab = '[id="scheduelr-tab-main"]';
const calendar = '[formcontrolname="datePicker"]';

export function goToFindPatient() {
  cy.get(mainPatientTab).click();
  cy.contains("button", "Find Patient").should("be.visible");
}

export function goToScheduler() {
  cy.get(mainSchedulerTab).click();
  cy.get(calendar).should("be.visible");
}
