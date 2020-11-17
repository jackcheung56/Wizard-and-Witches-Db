const { Schema,model } = require('mongoose')

const Spell = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('spells', Spell)