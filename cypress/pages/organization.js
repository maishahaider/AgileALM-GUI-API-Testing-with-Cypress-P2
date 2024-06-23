const organizations = [1, 2, 3, 4];
class Organization {
  checkAllOrg() {
    cy.get(
      "#__next > div > div.container.org-container > div.card-container > div"
    )
      .children("div")
      .should("have.length", 4);
  }

  checkOrgText() {
    organizations.forEach((item) =>
      cy
        .get(
          `#__next > div > div.container.org-container > div.card-container > div > div:nth-child(${item}) > div > div > div.proj-info`
        )
        .should("be.visible")
    );
  }
}

export default Organization;
