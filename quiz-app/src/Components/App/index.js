import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState, useReducer } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

const initialState =  0;

function reducer(state, action) {
  switch (action.type) {
    case "true":
      return state + 1;
    case "false":
      return state + 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useFetch();

  if (!data || !data[state]) {
    console.log(`This is in IF STMT: ${data}`);
    console.log(state)
    return <h1>...Loading</h1>;
  }

  console.log(`This is in app: ${data[0]}`);
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={data[state].question} />
      <div className="button-container">
        <Button value="true" dispatch={dispatch} />
        <Button value="false" dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
