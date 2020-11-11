import React, { useState } from 'react'
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleNewPersonSubmit = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already in phonebook`)
      setNewName('')
    } else {
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilter = (e) => {
    setNameFilter(e.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleFilter={handleFilter}/>
      <div>
        <h2>Add a new</h2>
        <NewPersonForm 
          newName={newName}
          newNumber={newNumber}
          handleNewName={handleNewName}
          handleNewNumber={handleNewNumber}
          handleNewPersonSubmit={handleNewPersonSubmit}
        />
      </div>
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow} />
    </div>
  )
}

export default App
