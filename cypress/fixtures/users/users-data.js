export const validCredentials = {
    username: Cypress.env('username'),
    password: Cypress.env('password')
}
export const invalidCredentials = {
    username: 'invalid',
    password: 'invalid'
}

export const blankCredentials = {
    username: ' ',
    password: ' '
}