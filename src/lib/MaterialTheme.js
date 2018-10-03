import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

export default {
  ligth: {
    palette: {
      type             : 'light',
      primary          : indigo,
      secondary        : pink,
      error            : red,
      contrastThreshold: 4,
      background       : {
        'default': red
      }
      // typography: {
      //   fontSize    : 12,
      //   htmlFontSize: 20
      // }
      // primary: {
      // light: purple[300], // will be calculated from palette.primary.main,
      // main: purple[500]
      // dark: purple[700] // will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      // },
      // secondary: {
      // light: green[300],
      // main: green[500]
      // contrastText: '#ffcc00' //  will be calculated to contrast with palette.secondary.main
      // dark: green[700] // will be calculated from palette.secondary.main,
      // }
    },
    status: {
      danger: 'orange'
    }
    // overrides: {
    //   MuiButton: {
    //     root: {
    //       '&:hover': {
    //         backgroundColor: 'purple',
    //         color          : 'white'
    //       }
    //     }
    //   }
    // }
    // overrides: {
    //   // Name of the component ⚛️ / style sheet
    //   MuiButton: {
    //     // Name of the rule
    //     root: {
    //       // Some CSS
    //       background  : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //       borderRadius: 3,
    //       border      : 0,
    //       color       : 'white',
    //       height      : 48,
    //       padding     : '0 30px',
    //       boxShadow   : '0 3px 5px 2px rgba(255, 105, 135, .3)'
    //     }
    //   }
    // }
  },
  dark: {
    palette: {
      type: 'dark'
      // primary  : pink,
      // secondary: indigo
    }
  }
}
