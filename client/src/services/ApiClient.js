import axios from 'axios'

const ApiClient = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/hp`
    : 'http://localhost:3001/hp/'
    
})


export default ApiClient