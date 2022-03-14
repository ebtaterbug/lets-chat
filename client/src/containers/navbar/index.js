import React from 'react'
import Channels from './channels-dms'
import Workspaces from './workspaces'

class Navbar extends React.Component {
  

  render () {
    return (
      <div className='navbar'>
        <Workspaces/>
        <Channels/>
      </div>
    )
  }
}

export default Navbar