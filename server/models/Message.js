const { model } = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Message = model('Message', messageSchema);

module.exports = Message;