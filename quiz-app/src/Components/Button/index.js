const bStyles = {
  padding: "10px 30px",
  backgroundColor: "white",
  color: "#6271a1",
  borderRadius: "50px",
  border: "none",
  fontSize: "20px",
  marginTop: "20px",
};

function Button({ value, dispatch, correctAnswer }) {
  return (
    <button
      style={bStyles}
      onClick={() =>
        dispatch({
          type: value,
          correctAnswer: correctAnswer,
          givenAnswer: value,
        })
      }
    >
      {value}
    </button>
  );
}

export default Button;
