import { useState } from 'react'
import Search from "./components/Search"
import ContactForm from "./components/ContactForm"
import Persons from "./components/Persons"

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personToFind, setPersonToFind] = useState('')
  const [showAll, setShowAll] = useState(true)

  // event
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook.`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event => {
    setPersonToFind(event.target.value)
    setShowAll(false)
  })

  const personsToShow = showAll 
  ? persons 
  : persons.filter( person => person.name.toLowerCase().includes(personToFind.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Search personToFind={personToFind} handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <ContactForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers:</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
