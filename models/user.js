const mongoose = require('mongoose')

const userSchema = mongoose.Schema;

const newUser = new userSchema({
    name:{
        type: String,
        required: true
        
    },
    userToPlatform:{
        type: String,
        required: true
        
    },
    joinedDate:{
        type: Date,
        required: 0,
        default: Date.now
    }
})


module.exports = mongoose.model('User', newUser)