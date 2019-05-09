import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    num: 100,
  }
  render() {
    const addNum = () => this.setState({num: this.state.num +1})
    const value = {
      state: this.state,
      addNum
    }

    return (
      <MyContext.Provider value={value}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
