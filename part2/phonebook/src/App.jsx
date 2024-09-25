import { useState, useEffect } from 'react'
import Search from "./components/Search"
import ContactForm from "./components/ContactForm"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personToFind, setPersonToFind] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect( () => {
    personService.getAll().then( initialContacts => {
      setPersons(initialContacts)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      const targetContact = persons.find( n => n.name === newName)
      if (window.confirm(`'${newName}' is already in your contacts. Would you like to replace the number?`)) {
        personService.update(targetContact.id, personObject).then( returnedContact => {
          setPersons(persons.map( p => p.id !== targetContact.id ? p : returnedContact))
        }).catch( () => {
          alert('could not perform action.')
        })
      }
      setNewName('')
      setNewNumber('')
      return
    }
    personService.create(personObject).then( returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    console.log(personObject.number)
  }

  const removeContact = id => {
    const contact = persons.find( c => c.id === id)
    
    personService.deleteContact(id).then( () => {
      if (window.confirm("Are you sure you want to remove contact?")) {
        setPersons( persons.filter( p => p.id !== id))
      }
      
    }).catch( error => {
      alert(`the person '${contact.name}' could not be removed.`)
    })
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
      <ContactForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers:</h3>
      <Persons personsToShow={personsToShow} removeContact={removeContact} />
    </div>
  )
}

export default App
