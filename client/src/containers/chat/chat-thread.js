import React, { Component } from 'react';
class Thread extends Component {
  state = {  } 
  render() { 
    const { onClose } = this.props
    return (
      <div className='chat-thread'>
        <div className='chat-thread-head'>
          <p>Thread</p>
          <span onClick={onClose}>X</span>
        </div>
      </div>
    );
  }
}
 
export default Thread;