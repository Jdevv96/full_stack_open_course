// APP DATA IS DEFINED

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const courseInfo = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


ReactDOM.createRoot(document.getElementById('root')).render(
    <App courseInfo={courseInfo}/>
)
