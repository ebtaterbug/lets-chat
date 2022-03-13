const { model } = require('mongoose');
const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
    channel_name: {
        type: String,
        required: true,
    },
});

const Channel = model('Channel', channelSchema);

module.exports = Channel;