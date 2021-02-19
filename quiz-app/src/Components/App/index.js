import { useReducer } from "react";
import useFetch from "../../hooks/useFetch";
import Button from "../Button";
import Screen from "../Screen/index";
import "./App.css";
import EndGame from "../EndGame";

const initialState = { index: 0, score: 0 };

function reducer(state, action) {
  let newScore = state.score;
  if (action.correctAnswer === action.givenAnswer) {
    newScore++;
  }
  console.log(state.score);
  switch (action.type) {
    case "True":
      return { index: state.index + 1, score: newScore };
    case "False":
      return { index: state.index + 1, score: newScore };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useFetch();

  if (!data) {
    console.log(`This is in IF STMT: ${data}`);
    console.log(state);
    return <h1 className="App">...Loading</h1>;
  }

  if (state.index >= data.length) {
    return <EndGame score={state.score} />;
  }

  console.log(`This is in app: ${data[0]}`);
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <p className="scoreBox">Score: {state.score}</p>
      <Screen question={data[state.index].question} />
      <div className="button-container">
        <Button
          value="True"
          dispatch={dispatch}
          correctAnswer={data[state.index].correct_answer}
        />
        <Button
          value="False"
          dispatch={dispatch}
          correctAnswer={data[state.index].correct_answer}
        />
      </div>
    </div>
  );
}

export default App;
