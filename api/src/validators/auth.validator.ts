import { check, CustomValidator, oneOf } from 'express-validator'
import { Role } from '@prisma/client'

import { findUserByEmail, findUserByUsername } from '../services/user.services'
import validateResult from '../utils/validateResult'

const checkDuplicateUsername: CustomValidator = (username) =>
  findUserByUsername(username).then((user) => {
    if (user !== null) return Promise.reject(new Error('El usuario ya existe'))
    return true
  })

const checkDuplicateEmail: CustomValidator = (email) =>
  findUserByEmail(email).then((user) => {
    if (user !== null) return Promise.reject(new Error('El correo ya existe'))
    return true
  })

export const signUp = [
  check('username')
    .exists()
    .notEmpty()
    .isString()
    .trim()
    .custom(checkDuplicateUsername),
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .trim()
    .custom(checkDuplicateEmail),
  check('role')
    .exists()
    .isString()
    .custom((value) =>
      Object.values(Role).includes(value)
        ? true
        : Promise.reject(new Error('El rol no existe'))
    ),
  check('password').exists().isString().notEmpty().isLength({ min: 8 }).trim(),
  validateResult
]

export const signIn = [
  oneOf([
    check('username').exists().notEmpty().isString(),
    check('email').exists().notEmpty().isEmail()
  ]),
  check('password').exists().notEmpty().isString().isLength({ min: 8 }),
  validateResult
]
