// RECEIVES PARTS ARRAY AND PASSES PROPS DOWN TO EACH PART

import Part from './Part'
import React from 'react'

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part}/>)}
        </div>
    )
}

export default Content