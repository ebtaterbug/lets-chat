import React, { Component } from 'react';
import ChatItem from './chat-item'

class Thread extends Component {
  state = {  } 
  render() { 
    const { onClose, currentMessage } = this.props
    return (
      <div className='chat-thread'>
        <div className='chat-thread-head'>
          <p>Thread</p>
          <span onClick={() => onClose(null)}>X</span>
        </div>
        <ChatItem message={currentMessage}/>
      </div>
    );
  }
}
 
export default Thread;