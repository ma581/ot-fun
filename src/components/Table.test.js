import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("Should render a data table with column headings", () => {
    const { getByText } = render(<Table />);

    expect(getByText("Symbol")).toBeInTheDocument();
    expect(getByText("Gene ID")).toBeInTheDocument();
    expect(getByText("Gene Name")).toBeInTheDocument();
    expect(getByText("Overall Association Score")).toBeInTheDocument();
  });

  test("Display data passed in", async () => {
    const data = [
      {
        symbol: "EGFR",
        geneId: "ENSG0001",
        geneName: "epidermal growth 1",
        overallAssociationScore: 1.0
      },
      {
        symbol: "SMAD2",
        geneId: "ENSG0002",
        geneName: "epidermal growth 2",
        overallAssociationScore: 0
      }
    ];

    const { getAllByTestId, getByText } = render(<Table data={data} />);
    const tableRows = getAllByTestId("data-row");
    const cellsInRowOne = tableRows[0].querySelectorAll("td");

    expect(getByText("EGFR")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
    expect(tableRows.length).toBe(2);
    expect(cellsInRowOne.length).toBe(5); // One additional column for + button
  });

  test("Display no rows if no data", () => {
    const data = [];

    const { container } = render(<Table data={data} />);
    const tableRows = container.querySelectorAll("tbody>tr");

    expect(tableRows.length).toBe(0);
  });

  test("Should have column of buttons", () => {
    const data = [
      {
        symbol: "EGFR",
        geneId: "ENSG0001",
        geneName: "epidermal growth",
        overallAssociationScore: 1.0
      }
    ];

    const { container } = render(<Table data={data} />);
    const buttons = container.querySelectorAll("button");

    expect(buttons.length).toBe(1);
  });
});

describe("Button behaviour", () => {
  const visibleRowsSelector = "[data-testid='expandable-row']";
  const data = [
    {
      symbol: "EGFR",
      geneId: "ENSG0001",
      geneName: "epidermal growth",
      overallAssociationScore: 1.0,
      associationScores: {
        literature: 0.5,
        rnaExpression: 0.5,
        geneticAssociation: 0.5,
        somaticMutation: 0.5,
        knownDrug: 0.5,
        animalModel: 0.5,
        affectedPathway: 0.5
      }
    }
  ];
  let container, button;

  beforeEach(() => {
    container = render(<Table data={data} />).container;
    button = container.querySelector("button");
  });

  test("Should display extra row if button is pressed", () => {
    let visibleRows = container.querySelectorAll(visibleRowsSelector);
    expect(visibleRows.length).toBe(0);

    fireEvent.click(button);

    visibleRows = container.querySelectorAll(visibleRowsSelector);
    expect(visibleRows.length).toBe(1);
  });

  test("Should hide extra row if button is pressed again", () => {
    fireEvent.click(button);
    let visibleRows = container.querySelectorAll(visibleRowsSelector);
    expect(visibleRows.length).toBe(1);

    fireEvent.click(button);

    visibleRows = container.querySelectorAll(visibleRowsSelector);
    expect(visibleRows.length).toBe(0);
  });

  test("Should display graph when button is pressed", () => {
    expect(container.querySelector("svg")).toBeNull();

    fireEvent.click(button);

    const graph = container.querySelector("svg");
    expect(graph).toBeInTheDocument();
  });
});
