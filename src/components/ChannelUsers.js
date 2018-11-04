import React from 'react';

class ChannelUsers extends React.Component {
  state = {
    user_list: []
  };

  render = () => {
    return (
      <div className="ChannelUsers">
        <ul>
          <li>Yotto</li>
          <li>16 Bit</li>
        </ul>
      </div>
    );
  };
}

export default ChannelUsers;
