import "./App.css";
import Screen from "../Screen/index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL);
  });

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
