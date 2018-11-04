import axios from 'axios';

// Setup some defaults so that we pass Rails CSRF protections.
// We will utilize the traditional rails cookie store for auth.
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;
