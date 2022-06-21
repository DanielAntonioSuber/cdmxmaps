import { Request, Response } from 'express'

import * as service from '../services/user.services'
import { comparePassword, createToken } from '../utils/libs/jwt'

export async function signUp (req: Request, res: Response) {
  const user = await service.createUser(req.body)

  if (user) res.status(201).json({ message: 'User was created' })
}

export async function signIn (req: Request, res: Response) {
  const { username, password, email } = req.body
  const user = await service.findUserByEmailOrUsername(email, username)

  if (user === null) {
    return res.status(400).json({ message: 'El usuario no existe' })
  }

  const isMatch = await comparePassword(password, user.password)

  if (isMatch) {
    return res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatarImage: user.avatarImage,
      accessToken: createToken(user)
    })
  }

  return res.status(400).json({
    message: 'Contraseña incorrecta'
  })
}
