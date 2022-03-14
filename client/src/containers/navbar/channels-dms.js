import React, { Component } from 'react'
import { channels } from '../../store/mock-data'

class Channels extends Component {
  render() {
    const { onChannelChange, currentChannel } = this.props
    const channelIds = Object.keys(channels)
    return (
      <div className='left-nav_channels'>
        {
          channelIds && channelIds.map(channelId => {
            const isCannelSelected = currentChannel === channelId
            return (
                <div 
                  key={channelId} 
                  onClick={() => onChannelChange(channelId)} 
                  className='left-nav_channel-name'
                  style={{
                    color: isCannelSelected ? 'white' : '',
                    fontSize: isCannelSelected ? '19px' : '18px'
                  }}
                >
                  {channels[channelId].channelName}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Channels
