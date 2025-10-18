import { waitTime } from "../../../fixtures/wait-time";

const { waitTimeInSeconds1 } = waitTime;
const newEncounterButton = '[id="btn_add_encounter"]';
const saveEncounterButton = '[id="btn_save_encounter"]';
const openEncounterButton = '[id="btn_open_encounter"]';
const backToSummaryButton = '[class="nav-back-btn"]';

export function createNewEncounter() {
  cy.get(newEncounterButton).click();
  cy.wait(waitTimeInSeconds1);
  cy.get(saveEncounterButton).click();
  cy.get(backToSummaryButton).should("be.visible");
}

export function openEncounter() {
  cy.get(openEncounterButton).eq(0).click();
  cy.get(backToSummaryButton).should("be.visible");
}
