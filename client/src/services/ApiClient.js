import axios from 'axios'

const ApiClient = axios.get({
    baseURL: 'http://localhost:3001/hp'
})


export default ApiClient