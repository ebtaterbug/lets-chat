import React, { Component } from 'react'
import Auth from '../../utils/auth';
class Header extends Component {
  render() {
    return (
      <div className='main-header'>
        <div className='header-user-greetings'>
          Hey, Welcome back!
          <p>Stay up to date with your team</p>
        </div>
        <div className='header-options'>
          <div className='header-options-search'>
            <input type='text' placeholder='Search here'/>
          </div>
          <div onClick={Auth.logout }className='header-options-logout'>Logout</div>
        </div>
      </div>
    )
  }
}

export default Header;
