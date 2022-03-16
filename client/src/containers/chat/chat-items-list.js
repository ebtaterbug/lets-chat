import React, { Component } from 'react';
import ChatItem from './chat-item'
class ChatItems extends Component {
  state = {  } 
  render() { 
    const { messages } = this.props
    return (
      <div className='chat-items-list'>
       {
         messages.map(message=>{
           return <ChatItem key={message.createdAt} message={message}/>
         })
       }
      </div>
    );
  }
}
 
export default ChatItems;