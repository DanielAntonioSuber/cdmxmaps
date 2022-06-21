import { Router } from 'express'

import * as controller from '../controllers/auth.controller'
import * as validator from '../validators/auth.validator'

const router = Router()

router.post('/signup', validator.signUp, controller.signUp)
router.post('/signin', validator.signIn, controller.signIn)

export default router
