var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    BirthDate: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('User', UserSchema);