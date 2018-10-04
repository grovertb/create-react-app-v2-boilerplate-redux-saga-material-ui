import base from './base'
import produce from 'immer'

export default base({
  namespace   : 'boilerplate',
  store       : 'theme',
  initialState: {
    style: 'ligth'
  }
}).extend({
  types  : [ 'UPDATE_THEME' ],
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.UPDATE_THEME:
          localStorage.setItem('style', action.theme)

          return {
            ...state,
            style: action.theme
          }
        default:
          draft.style = localStorage.getItem('style') || state.style

          return
      }
    }),
  creators: ({ types: { UPDATE_THEME } }) => ({
    updateTheme: theme => ({ type: UPDATE_THEME, theme })
  })
})
