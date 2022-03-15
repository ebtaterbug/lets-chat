import React from 'react';
import ChatsHeader from './chat-header';
import ChatItems  from './chat-items-list';
import SendMessage from './chat-send-message';
import Thread from './chat-thread';
import { channels } from '../../store/mock-data'

class Chats extends React.Component {
  state = { 
    currentTread: null
   } 

  toggleCurrentThread = (message) => {
    this.setState({
      currentTread: message
    })
  }
  render() { 
    const {currentChannel } = this.props
    const { currentTread } = this.state
    const channelMessages = channels[currentChannel].messages
    const selectedChannel = channels[currentChannel]
    return (
      <div className='main-chats'>
        <div className='chats-body'>
          <ChatsHeader selectedChannel={selectedChannel}/>
          <ChatItems toggleCurrentThread = {this.toggleCurrentThread} messages = {channelMessages}/>
          <SendMessage />
        </div>
        {currentTread ? 
        <Thread onClose={this.toggleCurrentThread} currentMessage = {currentTread} /> : null
        }
      </div>
    );
  }
}

export default Chats;