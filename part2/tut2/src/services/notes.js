import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

// GET
const getAll = () => {
    return axios.get(baseUrl)
}

// POST
const create = newObject => {
    return axios.post(baseUrl, newObject)
}

// PUT
const update = (id, newObject) => {
    return axios.put(`baseUrl/${id}`, newObject)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}