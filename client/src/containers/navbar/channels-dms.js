import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CHANNELS } from '../../utils/queries';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CHANNEL } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Channels = () => {
    // Get Channels
    const { data } = useQuery(QUERY_CHANNELS);
    const channels = data?.channels || []

    // Add Channels
    const [formState, setFormState] = useState({ channelName: '' });
    const [addChannel, { error }] = useMutation(ADD_CHANNEL);

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
        const { data } = await addChannel({
          variables: { ...formState }
        });
      
        Auth.login(data.addChannel.token);
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <div className='left-nav_channels'>
        
        {channels && channels.map(channel => (
            <div key={channel._id} className='left-nav_channel-name'>
              {channel.channelName}
            </div>
        ))}

        <form className='header-options-search bottom' onSubmit={handleFormSubmit}>
          <input
            type='text' 
            name='channelName' 
            id='channelName' 
            placeholder='Add a channel' 
            value={formState.channelName}
            onChange={handleChange}
          />
        </form>
      </div>
    )
}


export default Channels
