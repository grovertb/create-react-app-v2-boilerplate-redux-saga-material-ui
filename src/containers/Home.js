import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'

import themeReducer from '../reducers/theme'
import logo from '../sources/logo.svg'
import '../components/App.css'

class Home extends Component {
  state = {
    checkedB: false
  }

  render() {
    const {
      theme: { style },
      updateTheme
    } = this.props

    return (
      <div>
        <Switch
          checked={style === 'ligth'} color='primary' onChange={() => updateTheme(style === 'ligth' ? 'dark' : 'ligth')}
          value='checkedB' />
        <Button>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href='#text-buttons'>Link</Button>
        <Button color='primary' variant='contained'>
          Primary
        </Button>
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
        <Button color='primary' variant='fab'>
          <AccessAlarmIcon />
        </Button>
        <Button aria-label='Edit' color='secondary' variant='fab'>
          <ThreeDRotation />
        </Button>
        <Button aria-label='Delete' variant='extendedFab'>
          <ThreeDRotation />
          Extended
        </Button>
        <input
          accept='image/*' id='flat-button-file' multiple
          style={{ display: 'none' }} type='file' />
        <label htmlFor='flat-button-file'>
          <Button component='span'>Upload</Button>
        </label>
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
      </div>
    )
  }
}

export default connect(
  ({ theme }) => ({
    theme
  }),
  {
    updateTheme: themeReducer.creators.updateTheme
  }
)(Home)
