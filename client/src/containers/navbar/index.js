import React from 'react'
import Channels from './channels-dms'
import AppLogo from '../../assets/images/telegram.png'

class Navbar extends React.Component {
  

  render () {
    const { onChannelChange, currentChannel } = this.props
    return (
      <div className='left-nav'>
        <div className='left-nav_app-logo'><img src={AppLogo} alt='app logo'/>Let's Chat</div>
        <Channels onChannelChange={onChannelChange} currentChannel={currentChannel}/>
      </div>
    )
  }
}

export default Navbar