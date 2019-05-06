import React, { Component } from 'react';

const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

class Provider extends Component {
  state = {
    text: 'Look ma, I`m using react context...'
  }
  render () {
    return (
       <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}
export default Provider
