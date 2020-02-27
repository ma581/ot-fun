import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://demo6922545.mockable.io/")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Gene ID</th>
            <th>Gene Name</th>
            <th>Overall Association Score</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
