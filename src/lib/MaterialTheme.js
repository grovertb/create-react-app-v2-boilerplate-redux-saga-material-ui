import indigo from '@material-ui/core/colors/indigo'
import teal from '@material-ui/core/colors/teal'

export default {
  ligth: {
    palette: {
      type   : 'light',
      primary: {
        main: indigo[500]
      },
      secondary: {
        main: teal[500]
      }
    }
  },
  dark: {
    palette: {
      type   : 'dark',
      primary: {
        main: teal[500]
      },
      secondary: {
        main: indigo[500]
      }
    }
  }
}
