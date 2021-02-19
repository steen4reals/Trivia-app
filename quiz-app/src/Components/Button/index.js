function Button({ value, dispatch, correctAnswer }) {
	return <button onClick={() => dispatch({ type: value, correctAnswer: correctAnswer, givenAnswer: value})}>{value}</button>;
}

export default Button;
