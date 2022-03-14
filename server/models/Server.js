const { model } = require('mongoose');
const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    participant: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    server_name: {
        type: String,
        required: true,
    },
    channel: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel",
        },
    ],
});

const Server = model('Server', serverSchema);

module.exports = Server;