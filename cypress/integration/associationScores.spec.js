describe("Association Scores", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have 1 header row and 5 data rows", function() {
    cy.get("thead>tr").should("have.length", 1);
    cy.get("tbody>tr").should("have.length", 5);
  });

  it("should sort association scores in descending order", () => {
    const firstAssociationScore = "tbody > :nth-child(1) > :nth-child(5)";
    const lastAssociationScore = "tbody > :nth-child(5) > :nth-child(5)";

    cy.get(firstAssociationScore).then(a => {
      const num1 = parseFloat(a.text());
      cy.get(lastAssociationScore).then(b => {
        const num2 = parseFloat(b.text());
        expect(num2).to.be.lessThan(num1);
      });
    });
  });

  it("should display a graph when button is clicked", () => {
    cy.get("tbody").within(() => {
      cy.get("button")
        .first()
        .click();
      cy.get("svg");
    });
  });
});
