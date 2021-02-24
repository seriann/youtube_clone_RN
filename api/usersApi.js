import axios from 'axios'

const API = axios.create({
  baseURL: "http://apirestsockets-env.eba-w6w8cnxx.us-east-2.elasticbeanstalk.com/"
})

export default API
