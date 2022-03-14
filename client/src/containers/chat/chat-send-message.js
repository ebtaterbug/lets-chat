import React, { Component } from 'react';
class SendMessage extends Component {
  state = {  } 
  render() { 
    return (
      <div className='send-message'>
      <input className='send-message-input' placeholder='Send message...' />
      </div>
    );
  }
}
 
export default SendMessage;