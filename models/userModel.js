const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    user: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('user', userSchema);