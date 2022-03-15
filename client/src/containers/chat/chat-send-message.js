import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_MESSAGE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SendMessage = () => {
  
  // Add Channels
  const [formState, setFormState] = useState({ channelName: 'General', text: '' });
  const [addMessage, { error }] = useMutation(ADD_MESSAGE);

  

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
      const { data } = await addMessage({
        variables: { ...formState }
      });
    
      Auth.login(data.addMessage.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className='send-message' onSubmit={handleFormSubmit}>
    <input
      className='send-message-input'
      type='text' 
      name='text' 
      id='text' 
      placeholder='Send message...' 
      value={formState.text}
      onChange={handleChange}
    />
  </form>
  );
}

 
export default SendMessage;