import { useEffect, useState } from "react";

function useFetch(params) {
  const [data, setData] = useState([{question:""}]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();

      setData(data.results);
    }
    getData();
  }, []);

  function getNextData(){
    setIndex(index+1);
    return data[index];
  }
  return [data[index], getNextData];
}

export default useFetch;
