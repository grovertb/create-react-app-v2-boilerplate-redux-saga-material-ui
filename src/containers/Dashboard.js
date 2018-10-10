import React, { Component, Fragment } from 'react'

import Typography from '@material-ui/core/Typography'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <IconButton aria-label='Menu' color='inherit'>
              <MenuIcon />
            </IconButton>
            <Typography color='inherit' variant='h5'>
              create-react-app-v2-boilerplate-redux-saga-material-ui
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Dashboard
