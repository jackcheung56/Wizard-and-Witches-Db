import Axios from 'axios'

const ApiClient = Axios.create({
    baseURL: 'http://localhost:3000/hp'
})


export default ApiClient