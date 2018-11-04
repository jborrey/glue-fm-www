import React from 'react';
import axios from 'axios';
import ChatView from './ChatView';
import SignIn from './SignIn';
import { API_ROOT } from '../constants/index';

class ChannelsPage extends React.Component {
  // When this page loads, it first checks if the user is authenticated.
  // If so it renders the ChatView, otherwise renders SignIn.

  constructor(props) {
    super(props);
    this.loginSuccess = this.loginSuccess.bind(this);
    this.state = { loggedIn: true };
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    axios({
      method: 'get',
      url: API_ROOT + '/users/self-data'
    })
    .then(() => {
       this.setState({ loggedIn: true });
    })
    .catch(() => {
       this.setState({ loggedIn: false });
    });
  }

  loginSuccess() {
    this.setState({ loggedIn: true });
  }

  render = () => {
    return (
      <div className="ChannelsPage">
        {
          this.state.loggedIn
          ? <ChatView />
          : <SignIn loginSuccess={this.loginSuccess}/>
        }
      </div>
    );
  };
}

export default ChannelsPage;
