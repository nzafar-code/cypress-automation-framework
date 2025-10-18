import {
  searchPatientById,
  selectPatient,
} from "../../../../../cypress/app-actions/patient/patient-page";
import { openMaximus } from "../../../../../cypress/app-actions/login/login-page";
import { login } from "../../../../../cypress/heplers/login-helpers";
import {
  createNewEncounter,
  openEncounter
} from "../../../../../cypress/app-actions/patient/encounter/encounter-page";
import { goToFindPatient } from "../../../../../cypress/app-actions/common/side-menu/side-menu";
import { goToEncounter } from "../../../../../cypress/app-actions/patient/common/top-menu";

describe('"Maximus Application - Verify Insurance Functionality"', () => {
  beforeEach(() => {
    openMaximus();
    login();
  });

  it.skip("verify create encounter functionality", () => {
    goToFindPatient();
    searchPatientById();
    selectPatient();
    goToEncounter();
    createNewEncounter();
  });

  it("verify open encounter functionality", () => {
    goToFindPatient();
    searchPatientById();
    selectPatient();
    goToEncounter();
    openEncounter()
    
  });
});
