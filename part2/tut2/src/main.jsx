import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {
    id: 0,
    content: 'HTML is too easy.',
    important: true
  },
  {
    id: 1,
    content: 'Browser can execute only JavaScript.',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol.',
    important: false
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
