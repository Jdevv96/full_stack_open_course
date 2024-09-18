const Search = ({personToFind, handleSearchChange}) => {

    
    return (
        <div>Search: <input value={personToFind} onChange={handleSearchChange}/></div>
    )
}

export default Search