import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

function App() {
  //intial states
  const [index, setIndex] = useState(0);
  //get 10 Qs on mount

  const data = useFetch();

  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={"hello"} />
      <div className="button-container">
        <Button>True</Button>
        <Button>False</Button>
      </div>
    </div>
  );
}

export default App;
