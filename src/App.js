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

  return <div className="App"></div>;
}

export default App;
