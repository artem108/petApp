import React, { Component } from 'react';
import Provider from './provider'
import Main from '../components/Main'
import { setUrl } from '../helpers'

const MyContext = React.createContext('ok');

class App extends Component {
  render() {
    return <MyContext.Provider value={'me'}><Main /></MyContext.Provider>
  }
}

export default App;
