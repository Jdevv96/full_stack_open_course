import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const persons = [
  {name: 'Arto Hellas', number: '555-555-3434'},
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>)
