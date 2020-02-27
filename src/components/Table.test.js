import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

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
      geneId: "ENSG0001",
      geneName: "epidermal growth",
      overallAssociationScore: 1.0
    }
  ];

  const { container } = render(<Table data={data} />);
  const tableRows = container.querySelectorAll("tbody>tr");
  const tableData = container.querySelectorAll("tbody> tr> td");

  expect(tableRows.length).toBe(2);
  expect(tableData.length).toBe(8);
});

test("Display no rows if no data", () => {
  const data = [];

  const { container } = render(<Table data={data} />);
  const tableRows = container.querySelectorAll("tbody>tr");
  const tableColumns = container.querySelectorAll("tbody> tr> td");

  expect(tableRows.length).toBe(0);
  expect(tableColumns.length).toBe(0);
});
