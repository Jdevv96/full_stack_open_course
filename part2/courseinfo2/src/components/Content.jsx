// RECEIVES DATA FROM APP AND PASSES PROPS DOWN TO EACH PART

import Part from './Part'
import React from 'react'
import { useState } from "react";

const Content = ({parts}) => {
    const handleTotal = parts.reduce((sum, part) => sum + part.exercises, 0);
    const [count] = useState(handleTotal)
   


    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
            <p>total of {count} exercises.</p>
        </div>
    )
}

export default Content