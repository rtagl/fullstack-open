import React from 'react'

const Header = ({courseName}) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0)
  console.log(total, parts)
  return (
    <div>
      <strong><p>Number of exercises {total}</p></strong>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course