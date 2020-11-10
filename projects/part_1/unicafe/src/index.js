import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neutral, bad, average, positive}) => {
  return (
    <div>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      {isNaN(average)
        ? <div>average: no votes yet!</div>
        : <div>average: {average.toFixed(2)}</div>}
      {isNaN(positive)
        ? <div>positive: no votes yet!</div>
        : <div>positive: {positive.toFixed(2)}%</div>}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let average = (good*1 + neutral*0 + bad*-1) / (good + neutral + bad)
  let positive = (good / (good + neutral + bad))*100

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          average={average}
          positive={positive}
        />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

