import ApiClient from './ApiClient'

export const __GetCharacters = async(page, limit) => {
    try {
        const response = await ApiClient.get(
            `/character?page=${page || 1}&limit=${limit || 5}`
        )
        //console.log(response.data)
        return response.data.characters
    } catch (error){
        throw error
    }
}

export const __GetCharacter = async (_id) => {
    try{
        const response = await ApiClient.get(`/character/caster/${_id}`)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}