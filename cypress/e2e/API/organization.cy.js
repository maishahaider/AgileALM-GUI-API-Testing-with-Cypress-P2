import Login from "../../pages/LogIn";

describe("Project api", () => {
  it("Get all the projects with token", () => {
    const login = new Login();
    const token = login.getTokenByLogIn();
    token.then((body) => {
      const newToken = body.token;
      cy.request({
        method: "GET",
        url: "https://api.agilealm.cloud/api/v1/organization/myorganization",
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  });
});
