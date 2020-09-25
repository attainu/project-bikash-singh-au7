const mongoose = require("mongoose")
const Schema = mongoose.Schema

const businessSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
    },
    status:{
        type: Number,
        default: 0
    },
    website:{
        type: URL,
    },
    logo:{
        type: String,
    },
    cover:{
        type: String,
    },
    state:{
        type: String,
    },
    address:{
        type: String,
    },
    nearBy:{
        type: String,
    },
    facebook:{
        type: URL,
    },
    twitter:{
        type: URL,
    },
    youtube:{
        type: URL,
    },
    instagram:{
        type: URL,
    },
    linkedin:{
        type: URL,
    },
    createdDate:{
        type: String,
        default: new Date()
    }  

})

module.exports = mongoose.model('business', businessSchema);