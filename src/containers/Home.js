import React, { Component } from 'react'
import logo from '../sources/logo.svg'

import '../components/App.css'

class Home extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img alt='logo' className='App-logo' src={logo} />
          <p>
            Edit <code>src/containers/Home.js</code> and save to reload.
          </p>
          <a
            className='App-link' href='https://reactjs.org' rel='noopener noreferrer'
            target='_blank'>
            create-react-app-v2
          </a>
        </header>
      </div>
    )
  }
}

export default Home
