const Search = ({value, handleSearchChange}) => {
    return (
        <div>
            Search: <input value={value} onChange={handleSearchChange}/>
      </div>
    )
}