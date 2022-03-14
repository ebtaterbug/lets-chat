import React, { Component } from 'react';
import ChatItem from './chat-item'
class ChatItems extends Component {
  state = {  } 
  render() { 
    const { toggleCurrentThread, messages } = this.props
    return (
      <div className='chat-items-list'>
       {
         messages.map(message=>{
           return <ChatItem key={message.createdAt} onClick={()=>toggleCurrentThread(message)} message={message}/>
         })
       }
      </div>
    );
  }
}
 
export default ChatItems;