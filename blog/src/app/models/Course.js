const mongoose = require('mongoose')
const Schema = mongoose.mongoose.Schema

const Course = new Schema({
    name: {
        type: String,
        default: 'Default title',
    },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course)