const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
 
UserSchema.pre('save', function (next) {
    const user = this
})

module.exports = mongoose.model('User', UserSchema)