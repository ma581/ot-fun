import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Table from "./Table";
import { wait } from "@testing-library/dom";

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
      geneName: "epidermal growth",
      overallAssociationScore: 1.0
    },
    {
      symbol: "SMAD2",
      geneId: "ENSG0002",
      geneName: "epidermal growth",
      overallAssociationScore: 1.0
    }
  ];

  const { getAllByTestId } = render(<Table data={data} />);
  const tableRows = getAllByTestId("data-row");
  const tableData = tableRows[0].querySelectorAll("td");

  expect(tableRows.length).toBe(2);
  expect(tableData.length).toBe(5);
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

test("Should display extra row if button is pressed", () => {
  const data = [
    {
      symbol: "EGFR",
      geneId: "ENSG0001",
      geneName: "epidermal growth",
      overallAssociationScore: 1.0
    }
  ];

  const { container } = render(<Table data={data} />);
  const button = container.querySelector("button");
  let rows = container.querySelectorAll("tr[aria-hidden='true']");
  expect(rows.length).toBe(1);

  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  rows = container.querySelectorAll("tr[aria-hidden='false']");
  expect(rows.length).toBe(1);
});

test("Should hide extra row if button is pressed again", () => {
  const data = [
    {
      symbol: "EGFR",
      geneId: "ENSG0001",
      geneName: "epidermal growth",
      overallAssociationScore: 1.0
    }
  ];

  const { container } = render(<Table data={data} />);
  const button = container.querySelector("button");
  let rows = container.querySelectorAll("tr[aria-hidden='true']");

  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  rows = container.querySelectorAll("tr[aria-hidden='false']");
  expect(rows.length).toBe(1);

  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  rows = container.querySelectorAll("tr[aria-hidden='true']");
  expect(rows.length).toBe(1);
});
