import { login } from "../../../heplers/login-helpers";
import { openMaximus } from "../../../app-actions/login/login-page";
import { addInsurance} from "../../../app-actions/patient/insurance-page";
import {
  goToPatientInfo,
  searchPatientById,
  selectPatient,
  goToInsurance
} from "../../../app-actions/patient/patient-page";

import { goToFindPatient } from "../../../../cypress/app-actions/common/side-menu/side-menu";

describe("Maximus Application - Verify Insurance Functionality", () => {
  beforeEach(() => {
    openMaximus();
    login();
  });

  it("Verify create insurance functionality", { tags: ["smoke"] }, () => {
    goToFindPatient();
    searchPatientById();
    selectPatient();
    goToPatientInfo();
    goToInsurance();
    addInsurance();
  });
});
