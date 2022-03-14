import React from 'react';
class ChatsHeader extends React.Component {
  state = {  } 
  render() { 
    return (
      <div className='chatroom-header'>
        <div className='chatroom-desc'>
          # Chat Room Name
          <p>Chat room description here</p>
        </div>
        <div className='chatroom-info'>
          <div className='chatroom-members'>23</div>
          <div className='add-to-chatroom'>+</div>
        </div>
      </div>
    );
  }
}
 
export default ChatsHeader;