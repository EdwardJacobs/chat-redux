import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="assets/images/logo.svg" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
