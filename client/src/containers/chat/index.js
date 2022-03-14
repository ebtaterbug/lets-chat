import React from 'react';
import ChatsHeader from './chat-header';
import ChatItems  from './chat-items-list';
import SendMessage from './chat-send-message';
import Thread from './chat-thread';

class Chats extends React.Component {
  state = { 
    currentTread: false
   } 

  toggleCurrentThread = () => {
    this.setState({
      currentTread: !this.state.currentTread
    })
  }
  render() { 
    return (
      <div className='main-chats'>
        <div className='chats-body'>
          <ChatsHeader />
          <ChatItems toggleCurrentThread = {this.toggleCurrentThread}/>
          <SendMessage />
        </div>
        {this.state.currentTread ? 
        <Thread onClose={this.toggleCurrentThread} /> : null
        }
      </div>
    );
  }
}
 
export default Chats;