import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createMemoryHistory'

import reducers from '../src/reducers'
import rootSaga from '../src/sagas'

// Create a store and history based on a path
const createServerStore = (path = '/') => {
  const initialState = {}
  const sagaMiddleware = createSagaMiddleware()

  // We don't have a DOM, so let's create some fake history and push the current path
  const history = createHistory({ initialEntries: [ path ] })

  // All the middlewares
  const middleware = [ sagaMiddleware, routerMiddleware(history) ]
  const composedEnhancers = compose(applyMiddleware(...middleware))

  // Store it all
  const store = createStore(reducers, initialState, composedEnhancers)
  sagaMiddleware.run(rootSaga)

  // Return all that I need
  return {
    history,
    store
  }
}

export default createServerStore
// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import createSagaMiddleware from 'redux-saga'
// import createHistory from 'history/createMemoryHistory'
// import reducers from '../src/reducers'
// import rootSaga from '../src/sagas'

// export default function configureStore(initialState = {}) {
//   const sagaMiddleware = createSagaMiddleware()
//   // Create the store with two middlewares
//   const middlewares = [
//     sagaMiddleware,
//     routerMiddleware(history)
//   ]

//   const history = createHistory({ initialEntries: [ '/' ] })

//   const enhancers = applyMiddleware(...middlewares)

//   const store = createStore(reducers, initialState, compose(enhancers))

//   sagaMiddleware.run(rootSaga)
//   // Extensions
//   // store.runSaga = sagaMiddleware.run
//   // store.asyncReducers = {} // Async reducer registry

//   return {
//     history,
//     store
//   }
// }
