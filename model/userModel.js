const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    passWord: String,
    profilePicture: {
        pictureId: String,
        pictureUrl: String
    },
    previousProfilePictures: [String], // New field to store previous profile picture URLs
    isVerified: Boolean,
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);
module.exports = User;
