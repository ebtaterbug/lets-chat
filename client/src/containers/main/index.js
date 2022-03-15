import React, {useState}from 'react';
import Chats from "../chat";
import Header from "../header/header";
import Navbar from "../navbar";

function Main() {
  const [currentChannel, setCurrentChannel] = useState('channel1')

  const changeCurrentChannel = (channelId) => {
    setCurrentChannel(channelId)
  }

  return (
    <div className="main-container">
      <Navbar onChannelChange={changeCurrentChannel} currentChannel = {currentChannel}/>
      <div className="main-body">
        <Header/>
        <Chats currentChannel = {currentChannel}/>
      </div>
    </div>
  );
}

export default Main;