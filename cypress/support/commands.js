// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

import { lblPatientID } from "../app-actions/patient/patient-page"
const patientFilePath = 'cypress/fixtures/patient/patientIdInfo.json'
Cypress.Commands.add('savepatientID', ()=>{
    cy.get(lblPatientID).eq(1).invoke('text').then((id)=>{
        cy.writeFile(patientFilePath, { patientId: id })
    })

})

Cypress.Commands.add('getSavedPatientId', () => {
  return cy.readFile(patientFilePath).then((data) => {
    return data.patientId;
  });
});