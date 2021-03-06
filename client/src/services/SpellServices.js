import ApiClient from './ApiClient'

export const __GetSpells = async (page, limit) => {
    try{
        const response = await ApiClient.get(`/spell?page=${page || 1}&limit=${limit || 5}`)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetSpell = async (_id) => {
    try {
        const response = await ApiClient.get(`/spell/casted/${_id}`)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}