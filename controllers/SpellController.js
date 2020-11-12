const Spell = require('../models/spell')

const createSpell = async (request, response) => {
    try{
        const spell = await new Spell(request.body)
        await spell.save()
        return response.status(201).json({
            spell,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    createSpell
}