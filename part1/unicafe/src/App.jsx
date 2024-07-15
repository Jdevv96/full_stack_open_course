import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  const total = props.positive + props.negative + props.neutral;
  const avg = total >= 1 ? (props.positive - props.negative) / total : 0;
  const percentPositive = total >= 1 ? (props.positive / total) * 100 : 0;

  if (total === 0) {
    return <div>The app is used by pressing the buttons.</div>;
  } else {
    return (
      <div>
        <p>Positive: {props.positive} </p>
        <p>Neutral: {props.neutral}</p>
        <p>Negative: {props.negative}</p>
        <p>Total: {total}</p>
        <p>Average Score: {avg}</p>
        <p>Percent Positive: {percentPositive}%</p>
      </div>
    );
  }
};

const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);

  const handlePositiveClick = () => {
    setPositive(positive + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleNegativeClick = () => {
    setNegative(negative + 1);
  };

  return (
    <div>
      <h1>Feedback Form:</h1>
      <Button handleClick={handlePositiveClick} text={"positive"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleNegativeClick} text={"negative"} />

      <h2>Statistics: </h2>

      <Statistics positive={positive} negative={negative} neutral={neutral} />
    </div>
  );
};

export default App;
