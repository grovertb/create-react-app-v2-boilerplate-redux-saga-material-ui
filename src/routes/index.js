import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// import Loadable from 'react-loadable'
import loadable from 'loadable-components'

import Loading from '../components/Common/Loading'

// import Dashboard from '../containers/Dashboard'
// import Home from '../containers/Home'

const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */ '../containers/Dashboard'), {
  LoadingComponent: () => <Loading />
})

// const Dashboard = Loadable({
//   loader : () => import('../containers/Dashboard'),
//   loading: Loading
// })

const Home = loadable(() => import(/* webpackChunkName: "Home" */ '../containers/Home'), {
  LoadingComponent: () => <Loading />
})

// const Home = Loadable({
//   loader : () => import('../containers/Home'),
//   loading: Loading
// })

export default history => (
  <ConnectedRouter history={history}>
    <Switch>
      <Dashboard history={history}>
        <Route component={Home} exact path={`${process.env.PUBLIC_URL}/`} />
      </Dashboard>
    </Switch>
  </ConnectedRouter>
)
