import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length))
  const [likes, setLikes] = useState(new Array(anecdotes.length).fill(0))

  const handleClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleLikeClick = () => {
    const copyOfLikes = [...likes]
    copyOfLikes[selected] += 1
    setLikes(copyOfLikes)
  }

  const findMostPopular = () => {
    return (
      <div>
        <div>
          {anecdotes[likes.indexOf(Math.max(...likes))]}
        </div>
        <div>
          has {Math.max(...likes)} votes
        </div>
      </div>
    )
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {likes[selected]} likes
      </div>
      <div>
        <button onClick={handleLikeClick}>like</button>
        <button onClick={handleClick}>new anecdote</button>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        {findMostPopular()}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);

