import React from 'react'
import { MyContext } from '../containers/provider'

const Person = () => {
    return (
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Age: {context.state.num}</p>
              <button onClick={context.addNum}>add num</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
    )
}

export default Person

// const Main = props =>
//     <div className="app">
//         <section className="imageBg"></section>
//     </div>
//
// export default Main
