import { insuranceData } from "../../fixtures/patient/insurance-data";



const editInsuranceButton = '[class="link-btn "]';
const selfPayCheckbox = '[id^="chkSelfpay_ins_"]';
const addInsuranceButton = '[class="btn btn-link fz-12 title-bar-blue-btn font-weight-400 py-0"]';
const searchInsuranceField = '[id="txtInsuranceNameSearch"]';
const selectInsurance='#tr_0 td .link-btn';
const policyNumberField = '[id="txtPolicyNo"]';
const groupNumberField = '[id="txtGroupNo"]';
const copayField = '[id="txtCopy"]';
const addInsuranceToListButton = '[type="submit"]';
const saveInsuranceButton = '[class="btn btn-sm btn-info width-90 mr-1"]';

export function fillInsuranceForm() {
    cy.get(searchInsuranceField).type(insuranceData.name);
    cy.get(searchInsuranceField).type("{enter}");
    cy.get(selectInsurance).contains(insuranceData.name).click();
    cy.get(policyNumberField).type(insuranceData.policyNumber);
    cy.get(groupNumberField).type(insuranceData.groupNumber);
    cy.get(copayField).type(insuranceData.copay);

}
export function addInsurance() {
    cy.get(editInsuranceButton).contains('Edit').click();
    cy.get(selfPayCheckbox).click({force: true});
    cy.get(addInsuranceButton).contains('Add Primary Insurance').click();
    fillInsuranceForm()
    cy.get(addInsuranceToListButton).contains('Add').click();
    cy.get(saveInsuranceButton).contains('Save').click();
}

