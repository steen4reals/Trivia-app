import { useEffect, useState } from "react";

function useFetch(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();

      setData(data.results);
    }
    getData();
  }, []);

  return data;
}

export default useFetch;
