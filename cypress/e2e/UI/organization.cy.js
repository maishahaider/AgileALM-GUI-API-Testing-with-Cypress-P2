import Login from "../../pages/LogIn";
import Organization from "../../pages/organization";

describe("Organization page", () => {
  const org = new Organization();
  const login = new Login();
 
  beforeEach(() => {
    cy.visit("");
  });

  it("Checking the total organization", () => {
    cy.fixture("logInData").then((data) => {
      login.dologin(data.email, data.password);
    });
    org.checkAllOrg();
    org.checkOrgText();
  });
});
