const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

module.exports = mongoose.model('userShema', userSchema);