import { useState, useEffect } from 'react'
import Search from "./components/Search"
import ContactForm from "./components/ContactForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personToFind, setPersonToFind] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [alertMessage, setAlertMessage] = useState(null)
  const [successfulAlert, setSuccessfulAlert] = useState(false)

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
          setAlertMessage(
            `The number for '${newName}' has been updated!`
          )
          setSuccessfulAlert(true) // successful alert
          setTimeout(() => {
            setAlertMessage(null)
            setSuccessfulAlert(false) // failed alert
          }, 5000)
        }).catch( (error) => {
          setAlertMessage(
            `${error}: '${newName}' could not be added to the phonebook. Please try again.`
          )
          setSuccessfulAlert(false)
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
      }
      
      setNewName('')
      setNewNumber('')
      return
    }
    personService.create(personObject).then( returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setAlertMessage(
        `The contact '${newName}' has been added to your phonebook!`
      )
      setSuccessfulAlert(true) // successful alert
      setTimeout(() => {
        setAlertMessage(null)
        setSuccessfulAlert(false) // successful alert
      }, 5000)
      setNewName('')
      setNewNumber('')
    })
  }

  const removeContact = id => {
    const contact = persons.find( c => c.id === id)
    
    personService.deleteContact(id).then( () => {
      if (window.confirm("Are you sure you want to remove contact?")) {
        setPersons( persons.filter( p => p.id !== id))
        setAlertMessage(
          `The contact '${contact.name}' has been removed from your phonebook!`
        )
        setSuccessfulAlert(true) // successful alert
        setTimeout(() => {
          setAlertMessage(null)
          setSuccessfulAlert(false)
        }, 5000)
      }
    }).catch( error => {
        setAlertMessage(
          `${error}: The contact '${contact.name}' could not be removed. Please try again.`
        )
        setSuccessfulAlert(false) // failed alert
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000)
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
      <Notification message={alertMessage} successfulAlert={successfulAlert}/>
      <Search personToFind={personToFind} handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <ContactForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers:</h3>
      <Persons personsToShow={personsToShow} removeContact={removeContact} />
    </div>
  )
}

export default App
