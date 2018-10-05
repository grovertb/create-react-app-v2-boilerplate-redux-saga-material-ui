import express from 'express'
import universalLoader from './universal'

const router = express.Router()

router.get('/', universalLoader)

export default router
