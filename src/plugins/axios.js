import axios from 'axios'

const API_DOMAIN = 'http://18.138.148.53'

const service = axios.create({
  baseURL: API_DOMAIN,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Content-Type': 'application/json'
})

export default service
