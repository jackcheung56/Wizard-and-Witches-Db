import Apiclient from './ApiClient'

export const __GetHouse = async (_id) => {
    try {
        const response = await Apiclient.get(`/house/${_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}