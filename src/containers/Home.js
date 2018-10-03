import React, { Component } from 'react'
import logo from '../sources/logo.svg'

import '../components/App.css'
import Typography from '@material-ui/core/Typography'

class Home extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img alt='logo' className='App-logo' src={logo} />
          <Typography color='inherit' variant='title'>
            Edit <code>src/containers/Home.js</code> and save to reload.
          </Typography>
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
