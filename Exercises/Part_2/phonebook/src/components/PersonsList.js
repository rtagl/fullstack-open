import React from "react";

const PersonsList = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      {personsToShow.map((person, i) => {
        return (
          <div key={i}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PersonsList;
