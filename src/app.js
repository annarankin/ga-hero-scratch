import React, { Component } from 'react'
import { render } from 'react-dom'
import { Header, IssueList } from './components'

class App extends Component {
  state = {}

  componentDidMount() {

  }

  render() {
    return(
      <div className="app">
        <div className="g-row">
          <div className="g-column">
            <main role="main" className="main-content">
              <Header />
              <IssueList />
            </main>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))