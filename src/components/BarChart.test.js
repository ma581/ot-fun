import React from "react";
import { render } from "@testing-library/react";
import BarChart from "./BarChart";

test("Should render title and axes", () => {
  const { getByText } = render(<BarChart scores={{ key: "value" }} />);
  expect(getByText("Association Score vs Data Type")).toBeInTheDocument();
  expect(getByText("Data Type")).toBeInTheDocument();
  expect(getByText("Score")).toBeInTheDocument();
});

test("Should render svg graph", () => {
  const { container } = render(<BarChart scores={{ key: "value" }} />);
  expect(container.querySelector("svg")).toBeInTheDocument();
});
