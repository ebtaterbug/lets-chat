import React, { Component } from 'react';
class ChatItem extends Component {
  constructor(props) {
    super(props)
  }
  state = {  } 
  render() { 
    const {text, onClick} = this.props
    return (
      <div className='chat-item'>
        <div className='chat-item-avatar'>pic</div>
        <div className='chat-item-info' onClick={onClick}>
          <div className='chat-item-head'>User Name<span>12/2/22</span></div>
          <div className='chat-item-text'>{text}</div>
        </div>
      </div>
    );
  }
}
 
export default ChatItem;