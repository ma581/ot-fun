import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { sortByAssociationScore, toModel } from "./model/Model";
import Table from "./components/Table";

export const url = "https://demo6922545.mockable.io/";

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
    <div className="table">
      <Table data={data.slice(0, 5)} />
    </div>
  );
}

export default App;
