// function takes in a token from the auth action, if the token is there, then add it to the global headers, if not - then delete it from the headers
import axios from 'axios';

// Reason behind doing this is that whenever we have a token we are simply going to send it with every request. Instead of being selective about it (which request to send the token with).

// no request made via axios, simply adding a global header pass in token validate if true:
const setAuthToken = token => {
  // token value derived from localstorage
  if (token) {
    // set global header to the value of the token passed in:
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // if no token, delete global header
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

// pass value back into (auth) actions
export default setAuthToken;