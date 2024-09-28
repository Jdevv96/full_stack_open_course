import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

// GET ALL
const getAll = (countryName) => {
    const request = axios.get(`${baseUrl}${countryName}`)
    return request.then( response => response.data)
}

export default {
    getAll
}