import Person from "./Person"

const Persons = ({personsToShow, removeContact}) => {

    return (
        <div>
            List of contacts

            <ul>
                {personsToShow.map((person) => (
                    <Person key ={person.name} person={person} toggleRemove={() => removeContact(person.id)} />
                ))}
            </ul>
        </div>
    )
}

export default Persons