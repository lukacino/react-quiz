function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const paint = (index) => {
    return index === question.correctOption ? "correct" : "wrong";
  };

  return (
    <div className='options'>
      {question?.options?.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? paint(index) : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
