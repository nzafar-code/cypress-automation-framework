import { validCredentials } from "../../../cypress/fixtures/users/users-data"
const userName = '[id="txtuser"]'
const password = '[id="txtpassword"]'
const loginButton = '[class="btn btn-lg btn-primary btn-block"]'

export function openMaximus()
{
    cy.visit('/')
}
export function enterUserName() {
    cy.get(userName).type(validCredentials.username)
}

export function enterPassword() {
    cy.get(password).type(validCredentials.password)
}

export function clickLoginButton() {
    cy.get(loginButton).click()
}