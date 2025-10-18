 import { 
    enterUserName,
    enterPassword,
    clickLoginButton
} from "../app-actions/login/login-page";

export function login()
{
    enterUserName();
    enterPassword();
    clickLoginButton();
}