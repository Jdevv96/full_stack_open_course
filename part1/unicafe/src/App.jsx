import {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [positive, setPositive] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [negative, setNegative] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentPositive, setPercentPositive] = useState(0)

  const handlePositiveClick = () => {
    const p = positive + 1
    setPositive(p)
    const t = total + 1
    setTotal(t)
    setAverage( (p - negative) / t)
    setPercentPositive((p / t) * 100)
  }

  const handleNeutralClick = () => {
    const n = neutral + 1
    setNeutral(n)
    const t = total + 1
    setTotal(t)
    setAverage( (positive - negative) / t)
    setPercentPositive((positive / t) * 100)
  }

  const handleNegativeClick = () => {
    const n = negative + 1
    setNegative(n)
    const t = total + 1
    setTotal(total + 1)
    setAverage( (positive - n) / t)
    setPercentPositive((positive / t) * 100)
  }


  return (
    <div>
      <h1>Feedback Form:</h1>
      <Button handleClick={handlePositiveClick} text={'positive'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleNegativeClick} text={'negative'} />

      <h2>Statistics: </h2>
      <p>Positive: {positive} </p>
      <p>Neutral: {neutral}</p>
      <p>Negative: {negative}</p>
      <p>Total: {total}</p>
      <p>Average Score: {average}</p>
      <p>Positive Score %: {percentPositive.toFixed(2)}%</p>
    </div>
  )
}

export default App