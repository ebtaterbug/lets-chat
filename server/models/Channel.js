const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');

const channelSchema = new Schema({
    channelName: {
        type: String,
        required: true,
    },
    messages: [messageSchema],
});

const Channel = model('Channel', channelSchema);

module.exports = Channel;