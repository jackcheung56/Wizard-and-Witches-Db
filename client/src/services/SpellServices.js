import ApiClient from './ApiClient'

export const __GetSpells = async (page, limit) => {
    try{
        const response = await ApiClient.get(`/spell?page=${page || 1}&limit=${limit || 10}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetSpell = async (spellId) => {
    try {
        const response = await ApiClient.get(`/spell/${spellId}`)
        return response.data
    } catch (error) {
        throw error
    }
}