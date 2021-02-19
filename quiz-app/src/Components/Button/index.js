import { useState } from "react";

function Button({value, text}) {
  return <button onClick={() => dispatch({type: value})} >{text}</button>;
}

export default Button;


