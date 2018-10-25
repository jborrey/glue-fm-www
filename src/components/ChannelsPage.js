import React from 'react';
import ChatView from './ChatView';
import SignIn from './SignIn';

class ChannelsPage extends React.Component {
  state = {
    logged_in: false
  };

  render = () => {
    return (
      <div className="ChannelsPage">
        {
          this.state.logged_in
          ? <ChatView />
          : <SignIn />
        }
      </div>
    );
  };
}

export default ChannelsPage;
