import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState, useReducer } from "react";
import Button from "../Button";
import useFetch from "../../hooks/useFetch";

const initialState =  {index: 0, score: 0};




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useFetch();

  function reducer(state, action) {
    let newScore = state.score;
    if(data[state.index].correct_answer === action.type){
      newScore ++;
    }
    switch (action.type) {
      case "true":
        return {index: state.index + 1, score: newScore};
      case "false":
        return {index: state.index + 1, score: newScore};
      default:
        return state;
  
    }
    
  }
  console.log(state.score);


  
  if (!data) {
    console.log(`This is in IF STMT: ${data}`);
    console.log(state)
    return <h1>...Loading</h1>;
  }

  if (state.index>=data.length){
   return<h2>Game is over</h2>
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
