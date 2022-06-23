import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'
import { JWT_SECRET } from '../config/app'
import { findUserById } from '../services/user.services'

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await findUserById(payload.id)

    if (user) {
      const { id, email, username, role } = user
      return done(null, { id, email, username, role })
    }
    return done(null, false)
  } catch (error) {
    console.log(error)
  }
})
