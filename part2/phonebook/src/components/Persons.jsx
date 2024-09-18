import Person from "./Person"

const Persons = ({personsToShow}) => {

    return (
        <div>
            List of contacts

            <ul>
                {personsToShow.map((person) => (
                    <Person key ={person.name} person={person} />
                ))}
            </ul>
        </div>
    )
}

export default Persons