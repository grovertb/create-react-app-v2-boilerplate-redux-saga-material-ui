import indigo from '@material-ui/core/colors/indigo'
import teal from '@material-ui/core/colors/teal'

const configDefault = {
  typography: {
    useNextVariants: true
  }
}

export default {
  ligth: {
    ...configDefault,
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
    ...configDefault,
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
