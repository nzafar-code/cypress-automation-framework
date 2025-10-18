import { 
    openMaximus,
    enterUserName,
    enterPassword,
    clickLoginButton
} from "../../../app-actions/login/login-page"

describe('Maximus Application - Verify Login Functionality', () => {
    beforeEach(() => {
        openMaximus()
    })

    it('Verify login with valid credentials', {tags: ['smoke','regression'] },() => {
        enterUserName()
        enterPassword()
        clickLoginButton()
    })
})