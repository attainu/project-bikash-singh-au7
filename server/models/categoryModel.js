const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    status:{
        type: Boolean
    },
    created_date:{
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('category', categorySchema)