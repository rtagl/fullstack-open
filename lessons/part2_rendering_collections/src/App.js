import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(note))
    setNewNote('')
  }

  const handleNewNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleToggleImportance = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={handleNewNoteChange} placeholder="new note"/>
          <button type="submit">add note</button>
        </form>
      </div>
      <div>
        <button onClick={handleToggleImportance}>{showAll ? 'show important' : 'show all'}</button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App