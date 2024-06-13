function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  const percent = (points / maxPoints) * 100;
  return (
    <>
      <p className='result'>
        You scored <strong> {points}</strong> out of {maxPoints} (
        {Math.ceil(percent)}%)
      </p>
      <p className='highscore'>(Highscore: {highScore} points)</p>
      <br />
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
