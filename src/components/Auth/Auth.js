
// src/components/Auth/Auth.js

import createAuth0Client from '@auth0/auth0-spa-js';
import {Component} from 'react';
import {inject } from 'mobx-react';

@inject('store')
class Auth extends Component{
 
  async componentWillMount(){

      let auth0 = await createAuth0Client({
        domain: 'franky.auth0.com',
        client_id: '5Q3ltYyxhXeDv0dF1kmFIb4Bet79bd9b',
        redirect_uri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });
    this.props.store.initialize(auth0);
    this.props.store.setLoader(false);
  
  }

  render(){
    return(null);
  }

}

export default Auth;