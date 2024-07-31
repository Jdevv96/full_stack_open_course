// RECEIVES A PART OBJECT AND DISPLAYS THE INDIVIDUAL DETAILS


import React from "react"
import { useState } from "react"

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Part