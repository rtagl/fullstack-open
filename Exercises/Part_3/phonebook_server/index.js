const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "94",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "293",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234245",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.get("/info", (req, res) => {
  const numberOfContacts = persons.length;
  const date = new Date();

  res.send(`
    <p>Phonebook has ${numberOfContacts} people</p>
    <p>${date}</p>
    `);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({ error: "content missing" });
  } else if (persons.some((person) => person.name === body.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: Math.round(Math.random() * 10000),
  };

  persons.concat(newPerson);

  res.json(newPerson);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
