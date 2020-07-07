import React from 'react';

import './App.css';

import RootContainer from './containers/RootContainer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';


class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <RootContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
