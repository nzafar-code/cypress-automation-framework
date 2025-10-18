//import { searchPatientById, selectPatient } from "../patient/PatientPage";
import { schedulerData } from "../../fixtures/scheduler/scheduler-data";
import { waitTime } from "../../fixtures/wait-time";

const {waitTimeInSeconds2} = waitTime
const {location, visitReason, patientFullName}= schedulerData;
const selectTodayButton = '[class="btn btn-outline-info btn-sm w-100 "]';
const locationDropdown = '[formcontrolname="cmbLocation"]';
const schedulerTimeBtn = '[class="scheduler-time-btn"]';
const visitReasonDropdown = '[formcontrolname="cmbVisitReason"]';
const saveAppointmentButton = '[class="btn btn-info btn-sm"]';
const patientNameInTimeSlot = '[class="btn-patient"]';
const searchPatientFieldInScheduler = '[formcontrolname="txtPatientSearch"]';
const selectPatientLinkInScheduler = '[class="link-btn"]';

export function selectToday() {
  cy.get(selectTodayButton).click();
}
export function selectLocation() {
  cy.get(locationDropdown).select(location);
}
export function searchPatientByIdInScheduler() {
  cy.getSavedPatientId().then((id) => {
    cy.get(searchPatientFieldInScheduler).type(id).type("{enter}");
  });
}

export function selectPatientInScheduler() {
  cy.get(selectPatientLinkInScheduler).contains('AUTOMATION, TEST').click();
}
export function createAppointment() {
  cy.get(schedulerTimeBtn).eq(0).click();
  cy.wait(waitTimeInSeconds2);
  searchPatientByIdInScheduler();
  selectPatientInScheduler();
  cy.get(visitReasonDropdown).select(visitReason);
  cy.get(saveAppointmentButton).click();
  cy.wait(waitTimeInSeconds2s);
}

export function validateAppointmentCreation() {
  cy.get(patientNameInTimeSlot).should(
    "have.text",
    patientFullName
  );
}
