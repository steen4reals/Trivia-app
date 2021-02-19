function Button({ value, dispatch }) {
	return <button onClick={() => dispatch({ type: value })}>{value}</button>;
}

export default Button;
