import { gql } from '@apollo/client';

export const QUERY_CHANNELS = gql`
    query {
        channels {
            _id
            channelName
        }
    }
`;