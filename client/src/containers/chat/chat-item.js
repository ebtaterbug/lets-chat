import React, { useState } from 'react';
import { getRandomColor } from '../../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES } from '../../utils/queries';
import Auth from '../../utils/auth';

const colors = {
  1: '#1a064f',
  2: '#432cc6',
  3: '#9e054e',
  4: '#cb4ba0',
  5: '#317e2f',
  6: '#1d9fd7',
  7: '#29b326',
  8: '#a7c9e4',
  9: '#de2a4c',
  10: '#b9305a'

}
const ChatItem = () => {
    // Get Channels
    const { data } = useQuery(QUERY_MESSAGES);
    const messages = data?.messages || []
 
    return (
      <div className='chat-item'>
        <div className='chat-item-info'>
          <div className='chat-item-head'>{messages.username}</div>
          <div className='chat-item-text'>{messages.text}</div>
        </div>
      </div>
    );
}

 
export default ChatItem;