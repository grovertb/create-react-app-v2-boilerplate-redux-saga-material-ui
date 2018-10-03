import base from './base'

export default base({
  namespace   : 'boilerplate',
  store       : 'theme',
  initialState: {
    style: 'ligth'
  }
}).extend({
  types  : [ 'UPDATE_THEME' ],
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.UPDATE_THEME:
        return {
          ...state,
          style: action.theme
        }
      default:
        return state
    }
  },
  creators: ({ types: { UPDATE_THEME } }) => ({
    updateTheme: theme => ({ type: UPDATE_THEME, theme })
  })
})
