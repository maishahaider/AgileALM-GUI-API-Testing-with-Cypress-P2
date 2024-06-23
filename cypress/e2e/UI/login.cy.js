import Login from "../../pages/LogIn";

describe("Login pages", () => {
  const login = new Login();

  it.skip("Doing user login", () => {
    cy.visit("");
    login.signInButton();
    login.setEmail("haider23maisha@gmail.com");
    login.setPassword("haiderM123@");
    login.logInButton();
  });

  it.skip("Doing user login with fixture file", () => {
    const login = new Login();
    cy.visit("");
    cy.fixture("logInData").then((data) => {
      login.signInButton();
      login.setEmail(data.email);
      login.setPassword(data.password);
      login.logInButton();
    });
  });

  it("LogIn with doLogin method", () => {
    cy.visit("");
    cy.fixture("logInData").then((data) => {
      login.dologin(data.email, data.password);
    });
  });
});
