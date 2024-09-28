import { useEffect, useState } from 'react'
import rateService from './services/rates'
import Search from '../../phonebook/src/components/Search'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [rates, setRates] = useState([]) // ALL RATES
  const [countries, setCountries] = useState([])
  const [countryToFind, setCountryToFind] = useState('')
  const [showAll, setShowAll] = useState(false)

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

  useEffect( () => {
    console.log('app is starting. currency is: ', countryToFind)
    if (countries) {
      rateService.getAll(countryToFind).then( response => {
        setCountries(response)
      })
      
      .catch( () => {
          console.log('Error while loading')
        })
    }

  },[countryToFind])

  const handleSearchChange = ( event => {
    setCountryToFind(event.target.value)
  })

  const countriesToShow = showAll 
  ? countries
  : countries.filter( country => country.name.common.toLowerCase().includes(countryToFind.toLowerCase()))

  // const renderCountries = () => {
  //   if (countries.length > 10) {
  //     return <p>Too many matches, please specify another filter.</p>;
  //   } else if (countries.length > 0) {
  //     return countries.map(country => (
  //       <div key={country.alpha3Code}>
  //         <h2>{country.name}</h2>
  //       </div>
  //     ));
  //   }
  //   return null;
  // }


  return (
    <div>
      <h1>Currency Rates </h1>
      <h5>Find the currency rate information for any given country!</h5>
      <p>To start, simply enter the desired country</p>
      <Search countryToFind={countryToFind} handleSearchChange={handleSearchChange}/>
      <div>
        <Countries countriesToShow={countriesToShow} countries={countries}/>
      </div>
    </div>
  )
}

export default App
