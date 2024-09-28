import Country from "./Country"

const Countries = ({countries}) => {

    if (countries.length > 10) {
        return (
            <div>Too many matches, please enter the complete name.</div>
        )
    }

    if (countries.length === 0) {
        return (
            <div>No matches found.</div>
        )
    }
    return (
        <div>
            List of Countries:
            <ul>
                {countries.map( country => {
                    <Country key={country.alpha3code} country={country}/>
                })}
            </ul>
        </div>
    )
}

export default Countries