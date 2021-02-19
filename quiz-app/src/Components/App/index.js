import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState, useReducer } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case true:
        return index + 1;
      case false:
        return index - 1;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, getNextData] = useFetch();
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={data.question} />
      <div className="button-container">
        <Button text="True" value={true}/>
        <Button text="False" value={false}/>
      </div>
    </div>
  );
}

export default App;
