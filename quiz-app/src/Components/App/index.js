import "./App.css";
import Screen from "../Screen/index";
import { useEffect } from "react";
import Button from "../Button";

function App() {
  useEffect(() => {
    async function getData(){
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json()
      console.log(data);
    }
  getData()
  },[]);

  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen />
      <div className="button-container">
        <Button>True</Button>
        <Button>False</Button>
      </div>
    </div>
  );
}

export default App;
