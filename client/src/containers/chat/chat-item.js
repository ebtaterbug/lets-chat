import React, { Component } from 'react';
import { getRandomColor } from '../../utils/helpers'
const colors = {
  1: '#1a064f',
  2: '#432cc6',
  3: '#9e054e',
  4: '#cb4ba0',
  5: '#317e2f',
  6: '#1d9fd7',
  7: '#29b326',
  8: '#a7c9e4',
  9: '#de2a4c',
  10: '#b9305a'

}
class ChatItem extends Component {
  constructor(props) {
    super(props)
  }
  state = {  } 
  render() { 
    const {message, onClick} = this.props
    const messageOwnerAvatar = message?.author?.userName[0]+message.author.userName[1]
    return (
      <div className='chat-item'>
        <div className='chat-item-avatar' style={{background: getRandomColor(message.author.userName)}} >{messageOwnerAvatar.toUpperCase()}</div>
        <div className='chat-item-info' onClick={onClick}>
          <div className='chat-item-head'>{message.author.userName}<span>{message.createdAt}</span></div>
          <div className='chat-item-text'>{message.text}</div>
        </div>
      </div>
    );
  }
}
 
export default ChatItem;