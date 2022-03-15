const { Schema } = require('mongoose');

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});


module.exports = messageSchema;