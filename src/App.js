import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBhirpCd62BAK3mhV3K6Ia8-9h_qhm1Xmo',
      authDomain: 'metaphrasis-e57d5.firebaseapp.com',
      databaseURL: 'https://metaphrasis-e57d5.firebaseio.com',
      projectId: 'metaphrasis-e57d5',
      storageBucket: 'metaphrasis-e57d5.appspot.com',
      messagingSenderId: '1087926893553'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
