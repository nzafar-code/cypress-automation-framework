
import { selectLocation, selectToday, createAppointment, validateAppointmentCreation } from "../../../app-actions/scheduler/scheduler-page"
import { openMaximus } from "../../../app-actions/login/login-page"
import { login } from "../../../heplers/login-helpers"
import { goToScheduler } from "../../../../cypress/app-actions/common/side-menu/side-menu";

describe('Maximus Application - Verify Scheduler Functionality',()=>{
    beforeEach(() =>{
        openMaximus()
        login();
        
    });

    it('Verify create appointment functionality', {tags: ['smoke']},()=>{
        goToScheduler()
        selectToday()
        selectLocation()
        createAppointment()
        validateAppointmentCreation()
    })
})