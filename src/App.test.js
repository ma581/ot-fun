import React from "react";
import { render, waitForElement, wait, cleanup } from "@testing-library/react";
import App, { getBody, URL } from "./App";
import axiosMock from "axios";
import { LOADING } from "./useFetchData";

jest.mock("axios");

afterEach(jest.clearAllMocks);
afterAll(() => {
  cleanup();
});

test("Should fetch data from https://demo6922545.mockable.io/", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  render(<App />);
  await wait();

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(URL);
});

test("Should show error message if fetching data fails", async () => {
  axiosMock.get.mockReturnValueOnce(Promise.reject("oh no"));

  const { getByText } = render(<App />);

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  await wait(() =>
    expect(getByText(/failed to fetch data/)).toBeInTheDocument()
  );
});

test("Should render extracted data from json response", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      data: [
        {
          target: {
            gene_info: {
              symbol: "TFPI",
              gene_name: "tissue factor pathway inhibitor"
            },
            id: "ENSG00000003436"
          },
          association_score: {
            datatypes: {
              literature: 0.19517772984514156,
              rna_expression: 0.07211524912501942,
              genetic_association: 0.22628011248337543,
              somatic_mutation: 0.0,
              known_drug: 0.0,
              animal_model: 0.0,
              affected_pathway: 0.5
            },
            overall: 0.4
          }
        }
      ]
    }
  });

  const { getByText } = render(<App />);

  const element = await waitForElement(() => getByText("TFPI"));
  expect(element).toBeInTheDocument();
});

test("Should say Loading if fetch is not complete", () => {
  const body = getBody({ status: LOADING, data: [] });
  expect(body).toEqual(<p>Loading</p>);
});
