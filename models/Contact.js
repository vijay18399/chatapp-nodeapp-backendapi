var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
    sponser: {
        type: String,
        required: true,
    },
    contacts: {
        type: Array,
        required: true,
    }

});


module.exports = mongoose.model('Contact', ContactSchema);