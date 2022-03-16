import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHANNEL = gql`
  mutation addChannel($channelName: String!) {
    addChannel(channelName: $channelName) {
      token
      _id
      channelName
    }
  }
`;

export const ADD_MESSAGE = gql `
  mutation addMessage($text: String!) {
    addMessage(text: $text) {
      token
      _id
      text
      username
    }
  }
`