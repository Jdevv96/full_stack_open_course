import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

// GET
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( response => response.data)
}

// POST
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then( response => response.data)
}

// PUT
const update = (id, newObject) => {
    const request = axios.put(`baseUrl/${id}`, newObject)
    return request.then( response => response.data)
}

export default {
    getAll,
    create,
    update
}