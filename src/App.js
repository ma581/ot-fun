import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://demo6922545.mockable.io/")
      .then(res => setData(res.data))
      .catch(err => console.warn(err));
  }, []);

  return (
    <div className="App">
      <p>
        Feel free to edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
