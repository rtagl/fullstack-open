import React from 'react'

const NewPersonForm = ({newName, newNumber, handleNewName, handleNewNumber, handleNewPersonSubmit}) => {
  return (
    <div>
      <form onSubmit={handleNewPersonSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default NewPersonForm