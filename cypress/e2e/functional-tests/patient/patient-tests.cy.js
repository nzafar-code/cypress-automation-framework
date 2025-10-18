import {login} from "../../../heplers/login-helpers"
import { openMaximus } from "../../../app-actions/login/login-page"
import { 
    createPatient,
    savePatientUniqueId,
    searchPatientById,
    selectPatient,
    updatePatient
} from "../../../app-actions/patient/patient-page"

import { goToFindPatient } from "../../../../cypress/app-actions/common/side-menu/side-menu"
import { goToPatientInfo } from "../../../../cypress/app-actions/patient/common/top-menu"

describe('Maximus Application - Verify Patient Functionality', () => {
    beforeEach(()=>{
        openMaximus()
        login()
    })

    it.only('Verify create patient functionality', {tags: ['smoke']},() => {
        createPatient()
        savePatientUniqueId()
    })
    it('Verify search patient functionality',{tags: ['smoke']}, () => {
        goToFindPatient();
        searchPatientById()
    })

     it('Verify select patient functionality', {tags: ['smoke']}, () => {
        goToFindPatient();
        searchPatientById()
        selectPatient()
        goToPatientInfo()
    })
    it('Verify update patient functionality', {tags: ['regression']},() => {
        goToFindPatient();
        searchPatientById()
        selectPatient()
        goToPatientInfo()
        updatePatient()
    })

})