import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

// GET 
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( response => response.data)
}

// CREATE
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then( response => response.data)
}

// UPDATE
const update = (id, updatedOjbect) => {
    const request = axios.put(`baseUrl/${id}`, updatedOjbect)
    return request.then( response => response.data)
}

// DELETE

export default {
    getAll,
    create,
    update
}