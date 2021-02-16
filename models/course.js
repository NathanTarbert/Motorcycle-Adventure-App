var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Course = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxLength: '50 characters'
    },
    imageUrl: {
        type: String
    },
    isPublic: {
        private: false
    },
    createdAt: {
        type: String,
        required: true,
    },
    usersEnrolled: {

    }
});

Course.plugin(passportLocalMongoose);

module.exports = mongoose.model('Course', Course);