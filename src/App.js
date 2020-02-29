import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { sortByAssociationScore, toModel } from "./model/Model";
import Table from "./components/Table";
import { ERROR, SUCCESS, useFetchData } from "./useFetchData";

export const URL = "https://demo6922545.mockable.io/";

function App() {
  const body = getBody(useFetchData());
  return (
    <div>
      <h1>Genes associated with lung carcinoma</h1>
      {body}
    </div>
  );
}

export const getBody = ({ status, data }) => {
  const errorMessage =
    "Oops, failed to fetch data. Please try again in a little while.";
  switch (status) {
    case ERROR:
      return <p>{errorMessage}</p>;
    case SUCCESS:
      const model = toModel(data);
      const sorted = sortByAssociationScore(model);
      const topFive = sorted.slice(0, 5);
      return <Table data={topFive} />;
    default:
      return <p>Loading</p>;
  }
};

export default App;
