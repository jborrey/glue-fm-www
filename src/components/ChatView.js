import React from 'react';
import axios from 'axios';
import '../init/axios.js';
import { API_ROOT } from '../constants/index';
import UserView from '../components/UserView.js';
import ChannelUsers from '../components/ChannelUsers.js';
import ChannelSelect from '../components/ChannelSelect.js';

class ChatView extends React.Component {
  state = {
    name: '',
    pictureUrl: ''
  };

  render = () => {
    return (
      <div className="ChatView">
        <div className="LeftChatPane">
          <UserView />
          <ChannelUsers />
          <ChannelSelect />
        </div>
        <div className="MiddleChatPane">b</div>
        <div className="RightChatPane">c</div>
      </div>
    );
  };
}

export default ChatView;
