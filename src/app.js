import React, { Component } from 'react'
import { render } from 'react-dom'
import { Header, IssueList } from './components'
import 'whatwg-fetch'

class App extends Component {
  state = {
    startAt: '',
    maxResults: '',
    total: '',
    issues: [],
  }

  componentDidMount() {
    fetch('/api/issues', { credentials: 'same-origin' })
      .then(response => response.json())
      .then(json => {
        const data = JSON.parse(json)
        console.log(data)
        this.setState({ ...data })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    console.log(this.state)
    return(
      <div className="app">
        <div className="g-row">
          <div className="g-column">
            <main role="main" className="main-content">
              <Header />
              <IssueList {...this.state} />
            </main>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))