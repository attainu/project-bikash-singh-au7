const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: "business"
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: Boolean,
        default: false
    },
    created_date:{
        type: String,
        default: new Date()
    }
})

module.exports = mongoose.model('comment', commentSchema)