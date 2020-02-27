import React from "react";
import { render, wait } from "@testing-library/react";
import App from "./App";
import axiosMock from "axios";

jest.mock("axios");

afterEach(jest.clearAllMocks);

const url = "https://demo6922545.mockable.io/";

test("Fetch data from https://demo6922545.mockable.io/", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  render(<App />);

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  await wait();
});

test("Should not crash if fetching data fails", async () => {
  axiosMock.get.mockReturnValueOnce(Promise.reject("oh no"));

  render(<App />);

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  await wait();
});
