import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const Hello = ({name, age}) => {
//   const getBirthYear = () => {
//     return new Date().getFullYear() - age
//   }
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>You were probably born in {getBirthYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )


const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  } 

  const zeroCounter = () => {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text={"increase"} />
      <Button handleClick={zeroCounter} text={"zero"} />
      <Button handleClick={decreaseByOne} text={"decrement"} />
    </div>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
