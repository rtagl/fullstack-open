import React from "react";

const Note = ({ note, toggleImportance }) => {
  const text = note.important ? "not important" : "important";
  return (
    <li className="note">
      {note.content} <button onClick={toggleImportance}>{text}</button>
    </li>
  );
};

export default Note;
