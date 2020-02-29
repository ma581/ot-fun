import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./App";

export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";

export const useFetchData = () => {
  const [response, setResponse] = useState({ status: LOADING, data: [] });
  useEffect(() => {
    axios
      .get(URL)
      .then(res => res.data)
      .then(json => setResponse({ status: SUCCESS, data: json.data }))
      .catch(err => {
        setResponse({ status: ERROR, data: err });
        console.error(err);
      });
  }, []);
  return response;
};
