// import express from 'express'
// // import universalLoader from './universal'

// import { createStore, universalLoader } from './universal'

// const router = express.Router()

// router.get('/', universalLoader)

// export default router

import express from 'express'
import { createStore, universalLoader } from './universal'
import { existsSync } from 'fs'

const router = express.Router()

const preLoadState = './preLoadState.js'
const hasPreLoadState = existsSync(preLoadState)
const middleware = hasPreLoadState ?
  require(preLoadState).default :
  (req, res, next) => {
    next()
  }

// Set universal render middlewares
router.get('/', createStore, middleware, universalLoader)

export default router
