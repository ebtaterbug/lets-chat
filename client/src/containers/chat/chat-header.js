import React from 'react';
class ChatsHeader extends React.Component {
  state = {  } 
  render() { 
    const { selectedChannel } = this.props
    return (
      <div className='chatroom-header'>
        <div className='chatroom-desc'>
          # {selectedChannel.channelName.toUpperCase()}
        </div>
        {/* <div className='chatroom-info'>
          <div className='chatroom-members'>23</div>
          <div className='add-to-chatroom'>+</div>
        </div> */}
      </div>
    );
  }
}
 
export default ChatsHeader;