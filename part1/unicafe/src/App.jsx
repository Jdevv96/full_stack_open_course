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

  const handlePositiveClick = () => {
    setPositive(positive + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleNegativeClick = () => {
    setNegative(negative + 1)
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
    </div>
  )
}

export default App