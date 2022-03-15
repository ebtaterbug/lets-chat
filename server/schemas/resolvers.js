const { User, Channel } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
        },
        channels: async () => {
          return Channel.find()
          .select('-__v')
          .populate('messages');
        },
        channel: async (parent, { channelName }) => {
          return Channel.findOne({ channelName })
          .select('-__v')
          .populate('messages');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
        },
        addChannel: async (parent, args, context) => {
            if (context.user) {
              const channel = await Channel.create({ ...args, username: context.user.username });
              return channel;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        },
        addMessage: async (parent, { channelName, text }, context) => {
            if (context.user) {
              const updatedChannel = await Channel.findOneAndUpdate(
                { channelName: channelName },
                { $push: { messages: { text, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedChannel;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;