import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CHANNELS } from '../../utils/queries';

const Channels = () => {
    const { data } = useQuery(QUERY_CHANNELS);
    const channels = data?.channels || []

    console.log(channels)
    return (
      <div className='left-nav_channels'>
        
        {channels && channels.map(channel => (
            <div key={channel._id} className='left-nav_channel-name'>
              {channel.channelName}
            </div>
        ))}

      </div>
    )
}


export default Channels
