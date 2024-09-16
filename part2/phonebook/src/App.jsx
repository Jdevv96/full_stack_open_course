import { useState } from 'react'
import Person from "./components/Person"

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

  // event handlers
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

  // filter search
  const personsToShow = showAll 
  ? persons 
  : persons.filter( person => person.name.toLowerCase().includes(personToFind.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={personToFind} onChange={handleSearchChange}/></div>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type='submit'>add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.name} person={person}/>
        ))}
      </ul>
    </div>
  )
}

export default App
