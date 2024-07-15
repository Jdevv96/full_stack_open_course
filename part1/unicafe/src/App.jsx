import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.positive + props.negative + props.neutral;
  const avg = total >= 1 ? (props.positive - props.negative) / total : 0;
  const percentPositive = total >= 1 ? (props.positive / total) * 100 : 0;

  if (total === 0) {
    return <div>The app is used by pressing the buttons.</div>;
  } else {
    return (
      <table>
        <tbody>
        <StatisticLine text="positive" value={props.positive} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="negative" value={props.neutral} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average score" value={avg} />
        <StatisticLine text="percent positive" value={percentPositive} />
        </tbody>
      </table>
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
