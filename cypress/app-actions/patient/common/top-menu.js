const patientInfoTab = '[id="tab-patient-info"]'
const patientSummaryBar = '[class="patient-summary mb-1"]';
const encounterTab = '[id="tab-encounter"]';

export function goToPatientInfo() {
    cy.get(patientInfoTab).click();
    cy.get('[class="title"]').contains('span','Patient Information').should("be.visible");  
  }

  export function checkVisibilityOfPatientSummaryBar()
  {
    cy.get(patientSummaryBar).should("be.visible");
  }

  export function goToEncounter() {
    cy.get(encounterTab).click();
  }

