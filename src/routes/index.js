import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
// import loadable from 'loadable-components'

// import Loading from 'components/Common/Loading'

// const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */ 'containers/Dashboard'), {
//   LoadingComponent: () => <Loading />
// })

// const Home = loadable(() => import(/* webpackChunkName: "Home" */ 'containers/Home'), {
//   LoadingComponent: () => <Loading />
// })

import Dashboard from '../containers/Dashboard'
import Home from '../containers/Home'

export default history => (
  <ConnectedRouter history={history}>
    <Switch>
      <Dashboard history={history}>
        <Route component={Home} exact path='/' />
      </Dashboard>
    </Switch>
  </ConnectedRouter>
)
