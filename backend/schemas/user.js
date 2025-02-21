const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Enforcing unique email
    }
});




userSchema.plugin(passportLocalMongoose, { usernameField: 'email' }); // Use email as username for login

module.exports = mongoose.model('User', userSchema);
