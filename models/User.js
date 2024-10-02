const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    googleId: { type: String },
});

module.exports = mongoose.model('User', userSchema);
