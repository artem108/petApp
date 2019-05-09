import React, { Component } from 'react';
import MyProvider from './provider'
import Person from '../components/Main'
import { setUrl } from '../helpers'

class App extends Component {
  componentDidMount = () => setUrl();
  render() {
    return <MyProvider><Person /></MyProvider>
  }
}

export default App;
