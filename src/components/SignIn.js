import React from 'react';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import { API_ROOT } from '../constants/index';
import axios from 'axios';
import '../init/axios.js';

class SignIn extends React.Component {
  handleGoogleAuthSuccess = (response) => {
    console.log("Successfully authenticated with Google.");

    axios({
      method: 'post',
      url: API_ROOT + '/auth/google_oauth2/callback',
      data: { code: response.code },
      headers: {
        "X-CSRF-Token": Cookies.get("CSRF-TOKEN"),
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(this.props.loginSuccess)
    .catch(function() { // failure
       console.log('Failed to authenticate user.');
    });
  }

  handleGoogleAuthFailure = (response) => {
    console.log("Failed to authenticate with Google.");
  }

  render = () => {
    return (
      <div className="LoginPage">
        <GoogleLogin
          clientId="79836244654-jqsh1p7al6ee2kqkh5mmp7h3cp56c78s.apps.googleusercontent.com"
          responseType="code"
          buttonText="Login with Google"
          className="GoogleLoginButton"
          onSuccess={this.handleGoogleAuthSuccess}
          onFailure={this.handleGoogleAuthFailure}
        />
      </div>
    )
  };
}

export default SignIn;
