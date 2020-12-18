import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState({
    message: null,
    color: null,
  });

  useEffect(() => {
    noteService.getAll().then((notesInDB) => {
      setNotes(notesInDB);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    noteService.create(note).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
      setNotification({
        message: `${returnedNote.content} added`,
        color: "purple",
      });
      setTimeout(() => {
        setNotification({ message: null, color: null });
      }, 4000);
    });
  };

  const handleNewNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleToggleImportance = () => {
    setShowAll(!showAll);
  };

  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) =>
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      )
      .catch((error) => {
        setNotification({
          message: `the note "${note.content}" was already deleted`,
          color: "red",
        });
        setNotes(notes.filter((n) => n.id !== id));
        setTimeout(() => {
          setNotification({ message: null, color: null });
        }, 4000);
      });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification notification={notification} />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={newNote}
            onChange={handleNewNoteChange}
            placeholder="new note"
          />
          <button type="submit">add note</button>
        </form>
      </div>
      <div>
        <button onClick={handleToggleImportance}>
          {showAll ? "show important" : "show all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default App;
