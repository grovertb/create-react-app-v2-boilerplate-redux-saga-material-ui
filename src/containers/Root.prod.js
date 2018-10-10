import React, { Component, Fragment } from 'react'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

import MaterialTheme from '../lib/MaterialTheme'

import themeReducer from '../reducers/theme'

let muiTheme = createMuiTheme(MaterialTheme.ligth)

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    muiTheme = createMuiTheme(MaterialTheme[this.props.theme.style])
  }

  shouldComponentUpdate(nextProps) {
    const {
      theme: { style }
    } = nextProps

    if(this.props.theme.style !== style) {
      muiTheme = createMuiTheme(MaterialTheme[style])

      return true
    } else {
      return false
    }
  }

  render() {
    const { store, children } = this.props

    return (
      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <Fragment>
            <CssBaseline />
            {children}
          </Fragment>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  ({ theme }) => ({
    theme
  }),
  {
    updateTheme: themeReducer.creators.updateTheme
  }
)(Root)
