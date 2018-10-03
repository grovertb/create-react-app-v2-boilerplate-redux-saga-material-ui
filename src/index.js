import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as serviceWorker from './serviceWorker'
import './components/index.css'

// const render = Component => {
//   const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
//   renderMethod(<Component />, document.getElementById('root'))
// }

// render(App)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if(process.env.NODE_ENV === 'production') serviceWorker.register()
