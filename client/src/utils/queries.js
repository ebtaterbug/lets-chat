import { gql } from '@apollo/client';

export const QUERY_CHANNELS = gql`
    query {
        channels {
            _id
            channelName
        }
    }
`;

export const QUERY_MESSAGES = gql`
    query channel($channelName: String!) {
        channel(channelName: $channelName)  {
            _id
            channelName
            messages {
                text
                username
            }
        }
    }
`;

export const QUERY_ME = gql`
    query {
        me {
        username
        }
    }
`;