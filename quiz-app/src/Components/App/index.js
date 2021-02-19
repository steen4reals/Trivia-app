import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState, useReducer } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

const initialState = { index: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "true":
      return state.index + 1;
    case "false":
      return state.index - 1;
    default:
      return state.index;
  }
}

function App() {
  const data = useFetch();

  const [state, dispatch] = useReducer(reducer, initialState);

  if (!data || !data[state.index]) {
    console.log(`This is in IF STMT: ${data}`);
    return <h1>...Loading</h1>;
  }
  console.log(`This is in app: ${data[0]}`);
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={data[state.index].question} />
      <div className="button-container">
        <Button value="true" dispatch={dispatch} />
        <Button value="false" dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
