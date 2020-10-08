const mongoose = require("mongoose")
const Schema = mongoose.Schema

const businessSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
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
        type: Boolean,
        default: false
    },
    website:{
        type: String,
    },
    logo:{
        type: String,
        default: "No Logo"
    },
    cover:{
        type: String,
        default: "No Logo"
    },
    
    address:{
        type: String,
    },
    state:{
        type: String,
    },
    city:{
        type: String,
    },
    pinCode:{
        type: String,
    },
    facebook:{
        type: String,
    },
    twitter:{
        type: String,
    },
    youtube:{
        type: String,
    },
    instagram:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    createdDate:{
        type: String,
        default: new Date()
    }  

})

module.exports = mongoose.model('business', businessSchema);