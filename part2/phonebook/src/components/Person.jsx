const Person = ({person, toggleRemove}) => {
    return (
        <li>
            <p>{person.name} {person.number} </p>
            <button onClick={toggleRemove}>Delete</button>
        </li>
    )
}

export default Person