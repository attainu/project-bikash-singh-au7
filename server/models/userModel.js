const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    photo:{
        type: String
    },
    password:{
        type: String
    },
    facebook:{
        type: String,
        trim: true
    },
    twitter:{
        type: String,
        trim: true
    },
    instagram:{
        type: String,
        trim: true
    },
    youtube:{
        type: String,
        trim: true
    },
    status:{
        type: Boolean,
        default: true
    },
    bio:{
        type: String,
    },
    created_date:{
        type: String,
        default: new Date()
    }
})

userSchema.methods.encryptPassword = (password)=>{
    return bcrypt.hashSync(password, 12)
}
userSchema.methods.decryptPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('user', userSchema)