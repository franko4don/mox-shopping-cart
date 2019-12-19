
// src/App.js

import React, { Component } from 'react';
import Product from './components/Product';
import { Provider } from 'mobx-react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Store from './Store';
import { decorate, observable, action } from 'mobx';

import Login from "./components/Auth/Login"
import Callback from "./callback/Callback"

import './App.css';
import Auth from './components/Auth/Auth';
decorate(Store, {
  products: observable,
  addToCart: action,
  increaseQuantityInCart: action,
  decreaseQuantityInCart: action,
  removeFromCart: action,
  currentCart: observable,
  loading: observable
});
const shoppingStore = new Store();

class App extends Component {
  render() {

    return (
      <Provider store={shoppingStore}>
        <Auth/>
 <div className='container'>
          <Route
            exact
            path='/callback'
            render={() => <Callback  />}
          />
          <Route
            exact
            path='/'
            render={() => (
              <Product
                // authenticated={authenticated}
                
                history={this.props.history}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={() => <Login  />}
          />
        </div>
      </Provider>
    );
  }
}
export default withRouter(App);