import { Router } from 'express'
import passport from 'passport'

import authRoutes from './auth.routes'
import placesRoutes from './places.routes'

const router = Router()

router.get('/', (_, res) => res.send('Api v1'))

router.use('/auth', authRoutes)

// Protected routes
router
  .use('/', passport.authenticate('jwt', { session: false }))
  .use('/places', placesRoutes)

export default router
