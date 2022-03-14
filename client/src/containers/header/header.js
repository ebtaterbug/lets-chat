import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className='main-header'>
        <div className='header-user-greetings'>
          Hey User, Good Morning!
          <p>Stay up to date with your team</p>
        </div>
        <div className='header-options'>
          <div className='header-options-search'>
            <input type='text' placeholder='Search here'/>
          </div>
          <div className='header-options-settings'><img src=''/></div>
          <div className='header-options-profile'>User</div>
        </div>
      </div>
    )
  }
}

export default Header;
