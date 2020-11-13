import ApiClient from './ApiClient'

export const __GetCharacters = async(page, limit) => {
    try {
        const response = await ApiClient.get(
            `/character?page=${page || 1}&limit=${limit || 5}`
        )
        return response.data
    } catch (error){
        throw error
    }
}