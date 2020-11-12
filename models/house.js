const { Schema,model } = require('mongoose')

const House = new Schema ({
    name: {
        type: String,
        required: true
    },
    founder: {
        type: String,
        required: true
    },
    emblem: {
        type: String,
        required: true
    },
    trait: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('houses', House)