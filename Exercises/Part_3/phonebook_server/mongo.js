const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("format: node mongo.js <password> <name> <number>")
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://riccardo:${password}@cluster0.zqko1.mongodb.net/phonebook-entries?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
  name: name,
  number: number,
})

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook:")
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length > 3) {
  person.save().then((result) => {
    console.log(`added ${result.name} (${result.number}) to phonebook`)
    mongoose.connection.close()
  })
}
