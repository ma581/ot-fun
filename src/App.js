import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "axios";
import { sortByAssociationScore, toModel } from "./model/Model";
import Table from "./components/Table";

export const url = "https://demo6922545.mockable.io/";
const errorMessage =
  "Oops, failed to fetch data. Please try again in a little while.";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(res => res.data)
      .then(res => (res.data ? res.data : []))
      .then(toModel)
      .then(sortByAssociationScore)
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Genes associated with lung carcinoma</h1>
      {data.length > 0 ? (
        <Table data={data.slice(0, 5)} />
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
