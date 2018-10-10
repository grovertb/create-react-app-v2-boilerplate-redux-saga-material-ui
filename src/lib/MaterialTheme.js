import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'

export default {
  ligth: {
    palette: {
      type   : 'light',
      primary: {
        main: indigo[500]
      },
      secondary: {
        main: blue[500]
      }
    }
  },
  dark: {
    palette: {
      type   : 'dark',
      primary: {
        main: blue[500]
      },
      secondary: {
        main: indigo[500]
      }
    }
  }
}
