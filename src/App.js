import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { sortByAssociationScore, toModel } from "./model/Model";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://demo6922545.mockable.io/")
      .then(res => res.data)
      .then(res => (res.data ? res.data : []))
      .then(data => setData(sortByAssociationScore(toModel(data))))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="table">
      <Table data={data} />
    </div>
  );
}

export default App;
