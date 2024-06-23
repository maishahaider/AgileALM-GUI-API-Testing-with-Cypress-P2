class Login {
  signInButton() {
    cy.get(
      "#__next > div > div > div.header > div > nav > ul > div > li:nth-child(1) > a"
    ).click();
  }

  setEmail(email) {
    cy.get("#email").type(email);
  }

  setPassword(password) {
    cy.get("#phone").type(password);
  }

  logInButton() {
    cy.get(
      "#__next > div > div.auth_wrapper > div > div > div.form_wrapper > button"
    ).click();
  }

  dologin(email, password) {
    this.signInButton();
    this.setEmail(email);
    this.setPassword(password);
    this.logInButton();
  }

  //getting token from API
  getTokenByLogIn() {
    return cy
      .request({
        method: "POST",
        url: "https://api.agilealm.cloud/api/v1/user/login",
        body: {
          email: "haider23maisha@gmail.com",
          password: "haiderM123@",
        },
      })
      .then((res) => {
        return res.body;
      });
  }
}
export default Login;
