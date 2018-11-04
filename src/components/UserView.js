import React from 'react';
import axios from 'axios';
import '../init/axios.js';
import { API_ROOT } from '../constants/index';

// TODO: Log out button.

class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pictureUrl: ''
    };

    this.fetchSelfData();
  }

  fetchSelfData() {
    axios({
      method: 'get',
      url: API_ROOT + '/users/self-data'
    })
    .then((response) => {
      this.setState({
        name: response.data['name'],
        pictureUrl: response.data['picture_url']
      })
    })
    .catch(() => {
      console.log('Failed to fetch user data');
    });
  }

  render = () => {
    return (
      <div className="UserView">
        <div className="PictureAndName">
          <div className="VerticalCentered"><img src={this.state.pictureUrl} alt={this.state.name + 'profile picture'} /></div>
          <div className="VerticalCentered UserName">{this.state.name}</div>
        </div>
      </div>
    );
  };
}

export default UserView;
