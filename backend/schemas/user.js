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



userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email', // Email as username
    usernameLowerCase: true // Emails ko lowercase me normalize kare
});

module.exports = mongoose.model('User', userSchema);
