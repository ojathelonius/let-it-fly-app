import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React, { Component } from 'react';
import thunk from 'redux-thunk';
import AppContainer from './src/containers/AppContainer';
import combinedReducers from './src/reducers/combinedReducers';
import { StyleSheet, Text, View } from 'react-native';
import * as Expo from 'expo';

const store = createStore(combinedReducers, applyMiddleware(thunk));

Expo.SplashScreen.preventAutoHide();

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;