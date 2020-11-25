import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
