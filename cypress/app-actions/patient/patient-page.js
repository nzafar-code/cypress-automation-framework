import { patientData } from "../../fixtures/patient/patient-data";
import { waitTime } from "../../fixtures/wait-time";
import { checkVisibilityOfPatientSummaryBar } from "./common/top-menu";


const {waitTimeInSeconds1, waitTimeInSeconds3}= waitTime;
const createPatientButton = '[class="btn btn-info btn-sm mx-2"]';
const firstName = '[id="txtPatFName"]';
const lastName = '[formcontrolname="txtPatLName"]';
const dob = '[id="dpBirthDate"]';
const gender = '[id="ddGender"]';
const address = '[id="txtAddressL1"]';
const zipCode = '[id="txtZipCode"]';
const cellPhone = '[id="txtCellPhone"]';
const savePatientButton = '[class="btn btn-sm btn-info width-90 mr-1"]';
export const lblPatientID = '[class="value"]';
const noInsuranceConfirmYesButton = '[class="btn btn-info btn-sm"]';
const searchPatientField ='[id="ctrlPatientSearch"]';
const selectPatientButton = '[class="link-btn d-flex align-items-center"]';
const editPatientButton = '[class="link-btn "]';
const firstNameValue = '[class="form-view "] .value';
const lastNameValue = '[class="form-view "] .value';
const dobValue = '[class="form-view "] .value';
const insuranceTab = '[id="tab_pat_ins"]';


export function goToInsurance() {
  cy.get(insuranceTab).click();
}
export function fillPatientForm(patientData) {
  cy.get(firstName).type(patientData.firstName);
  cy.wait(waitTimeInSeconds1);
  cy.get(lastName).type(patientData.lastName);
  cy.wait(waitTimeInSeconds1);
  cy.get(dob).type(patientData.dob);
  cy.wait(waitTimeInSeconds1);
  cy.get(gender).select(patientData.gender);
  cy.wait(waitTimeInSeconds1);
  cy.get(address).type(patientData.address);
  cy.wait(waitTimeInSeconds1);
  cy.get(zipCode).type(patientData.zipCode);
  cy.wait(waitTimeInSeconds1);
  cy.get(cellPhone).type(patientData.cellPhone);
  cy.wait(waitTimeInSeconds1);
}
export function createPatient() {
  goToFindPatient();
  cy.get(createPatientButton).click();
  fillPatientForm(patientData);
  cy.get(savePatientButton).click();
  cy.get(noInsuranceConfirmYesButton).click();
  cy.wait(waitTimeInSeconds3);
}

export function savePatientUniqueId() {
  cy.savepatientID();
}

export function searchPatientById() {
  cy.getSavedPatientId().then((id) => {
    cy.get(searchPatientField).type(id).type("{enter}");
  });
}

export function selectPatient() {
  cy.get(selectPatientButton).eq(8).click();
  cy.wait(waitTimeInSeconds1);
  checkVisibilityOfPatientSummaryBar()
}

export function updatePatient() {
  cy.get(editPatientButton).contains('Edit').click(); 
  cy.get(firstName).clear().type('Test1');
  cy.get(lastName).clear().type('Automation1');
  cy.get(dob).clear().type('11/04/1996');
  cy.get(savePatientButton).click();
  cy.get(firstNameValue).eq(0).should('have.text', 'TEST1');
  cy.get(lastNameValue).eq(0).should('have.text', 'AUTOMATION1');
  cy.get(dobValue).eq(0).should('have.text', '11/04/1996');
}
