import Login from "../../pages/LogIn";

describe("Log In API", () => {
  const login = new Login();

  it("Get the token", () => {
    const token = login.getTokenByLogIn();
    token.then((body) => {
      const newToken = body.token;
      console.log(newToken);
    
    });
  });
});


