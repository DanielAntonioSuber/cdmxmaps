import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/app'

export const createToken = (user: User) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: 86400 }
  )

export const comparePassword = async (
  password: string,
  encryptPassword: string
) => await bcrypt.compare(password, encryptPassword)

export const encryptPassword = async (password: string) =>
  await bcrypt.hash(password, bcrypt.genSaltSync(10))
