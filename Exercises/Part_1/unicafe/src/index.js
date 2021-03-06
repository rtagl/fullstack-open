import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="all" value={all}/>
            <Statistic text="average:" value={average.toFixed(2)} />
            <Statistic text="positive:" value={positive.toFixed(2) + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + bad + neutral 
  let average = (good*1 + neutral*0 + bad*-1) / (all)
  let positive = (good / (all))*100

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
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
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

