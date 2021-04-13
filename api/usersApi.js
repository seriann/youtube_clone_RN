import axios from 'axios'

const API = axios.create({
  baseURL: "https://rest-api-sockets.herokuapp.com"
})

export default API
