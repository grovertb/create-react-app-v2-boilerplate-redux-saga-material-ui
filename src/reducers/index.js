import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import theme from './theme'

export default combineReducers({
  routing      : routerReducer,
  [theme.store]: theme.reducer
})
