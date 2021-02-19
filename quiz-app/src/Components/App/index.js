import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState, useReducer } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

const initialState = {index: 0};
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case true:
        return state.index + 1;
      case false:
        return state.index - 1;
      default:
        return state.index;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useFetch();
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={data[index].question} />
      <div className="button-container">
        <Button text="True" value={true}/>
        <Button text="False" value={false}/>
      </div>
    </div>
  );
}

export default App;
