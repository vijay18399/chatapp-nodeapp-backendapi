var mongoose = require('mongoose');
var GroupSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    admin: {
        type: Object,
        required: true,
        lowercase: true,
        trim: true
    },
    members: {
        type: Array
    },
    membercheck:{
        type:Array
    }

});


module.exports = mongoose.model('Group', GroupSchema);