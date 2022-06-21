import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import passport from 'passport'

import { APP_PORT } from './config/app'
import passportMiddleware from './middlewares/passport'
import routes from './routes'

const app = express()

// Settings
app.set('port', APP_PORT)

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())
passport.use(passportMiddleware)

// Routes
app.use('/api', routes)

export default app
