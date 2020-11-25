import React from 'react'

const PersonsList = ({personsToShow}) => {
  return (
    <div>
      {personsToShow.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default PersonsList