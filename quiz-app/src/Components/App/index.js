import "./App.css";
import Screen from "../Screen/index";
import { useEffect, useState} from "react";
import Button from "../Button";

function App() {
  //intial states
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  //get 10 Qs on mount
  useEffect(() => {
    async function getData(){
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json()
      
      setQuestion(data.results)
    }
    getData()
  },[]);
  
  console.log(question[index])
  return (
    <div className="App">
      <h1>Trials of Mt. Olympus</h1>
      <Screen question={"hello"}/>
      <div className="button-container">
        <Button>True</Button>
        <Button>False</Button>
      </div>
    </div>
  );
}

export default App;
