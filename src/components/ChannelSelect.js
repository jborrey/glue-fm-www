import React from 'react';

class ChannelSelect extends React.Component {
  state = {
    user_list: []
  };

  render = () => {
    return (
      <div className="ChannelSelect">
        <ul>
          <li>Melodic Techno</li>
          <li>Deep House</li>
        </ul>
      </div>
    );
  };
}

export default ChannelSelect;
