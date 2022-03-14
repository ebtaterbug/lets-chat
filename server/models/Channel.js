const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');

const channelSchema = new Schema({
    messages: [messageSchema],
    channel_name: {
        type: String,
        required: true,
    },
});

const Channel = model('Channel', channelSchema);

module.exports = Channel;