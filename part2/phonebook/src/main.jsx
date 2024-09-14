import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const persons = [
  {name: 'Arto Hellas',
    number: '555-555-3434'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>)
