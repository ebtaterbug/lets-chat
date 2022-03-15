// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
  }

  type Channels {
    _id: ID
    channelName: String
    messages: [Message]
  }

  type Message {
    _id: ID
    text: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    channels: [Channels]
    channel(channelName: String!): Channels
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addChannel(channelName: String!): Channels
    addMessage(channelName: String!, text: String!): Message
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;