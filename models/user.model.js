var mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


var User = mongoose.Schema({
    username: String,
    password: String,
    facebookId: String,
    email: String,
    active: Boolean,
    gender: String,
    dob: Date
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
