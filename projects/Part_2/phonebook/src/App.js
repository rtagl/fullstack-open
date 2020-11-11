import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPersonSubmit = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already in phonebook`)
      setNewName('')
    } else {
      const person = {
        name: newName
      }
      setPersons(persons.concat(person))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPersonSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => <div key={i}>{person.name}</div>)}
      </div>
    </div>
  )
}

export default App
