import React, { Component } from 'react';
import ChatItem from './chat-item'
class ChatItems extends Component {
  state = {  } 
  render() { 
    const { toggleCurrentThread } = this.props
    return (
      <div className='chat-items-list'>
        <ChatItem  onClick={toggleCurrentThread} text={'This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a  a message sent now This is a message sent now This is a message sent now This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now This is a message sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This is a message sent now This is a message sent now This is a message sent now ssage sent now'}/>
        <ChatItem onClick={toggleCurrentThread} text={'This sent now'}/>
      </div>
    );
  }
}
 
export default ChatItems;