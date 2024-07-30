// RECEIVES THE COURSE PROP AND PASSES DETAILS TO OTHER COMPONENTS

import React from 'react'
import Content from './Content'
import Header from './Header'

const Course = ({course}) => {
    

      return (
        <div>
          <Header courseName={course.name}/>
          <Content parts={course.parts}/>
        </div>
      )
}

export default Course