import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import NewPersonForm from "./components/NewPersonForm";
import Notification from "./components/Notification";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    color: null,
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNewPersonSubmit = (e) => {
    e.preventDefault();

    // check if a user exists
    const personExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (personExists) {
      let personToUpdate = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );

      // confirm to update person object
      if (window.confirm(`update ${personToUpdate.name}?`)) {
        personToUpdate = { ...personToUpdate, number: newNumber };
        personService
          .update(personToUpdate.id, personToUpdate)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personToUpdate.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setNotification({
              message: `${returnedPerson.name}'s number has been updated`,
              color: "green",
            });
            setTimeout(() => {
              setNotification({ message: null, color: null });
            }, 4000);
          });
      }
    } else {
      // if person does not exist, create new person object
      const person = {
        name: newName,
        number: newNumber,
      };
      personService.create(person).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotification({
          message: `${returnedPerson.name} added`,
          color: "green",
        });
        setTimeout(() => {
          setNotification({ message: null, color: null });
        }, 4000);
      });
    }
  };

  const handleFilter = (e) => {
    setNameFilter(e.target.value);
  };

  const handleDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${personToDelete.name}`)
    ) {
      personService
        .remove(id)
        .then((removedPerson) => {
          setPersons(persons.filter((person) => person.id !== id));
          setNotification({
            message: `${personToDelete.name} has been deleted`,
            color: "red",
          });
          setTimeout(() => {
            setNotification({ message: null, color: null });
          }, 4000);
        })
        .catch((error) => {
          setNotification({
            message: `${personToDelete.name} has already been deleted`,
            color: "red",
          });
          setTimeout(() => {
            setNotification({ message: null, color: null });
          }, 4000);
        });
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <Notification notification={notification} />
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleFilter={handleFilter} />
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
      <PersonsList personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
