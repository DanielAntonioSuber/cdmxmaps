import { check, CustomValidator, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'
import fs from 'fs'

import { findKind, findPlaceByName } from '../services/places.services'

const checkDuplicateName: CustomValidator = (name: string) =>
  findPlaceByName(name).then((place) => {
    if (place !== null) return Promise.reject(new Error('El lugar ya existe'))
    return true
  })

const checkKind: CustomValidator = (kind: string) =>
  findKind(kind).then((kind) => {
    if (kind === null) return Promise.reject(new Error('El tipo no es válido'))
    return true
  })

function validateResult (req: Request, res: Response, next: NextFunction) {
  try {
    validationResult(req).throw()
    return next()
  } catch (error: any) {
    res.status(403)
    res.send({ errors: error.array() })

    if (Array.isArray(req.files)) {
      req.files?.forEach(async (file) => {
        fs.unlink(file.path, (err) => {
          if (err) console.error(err)
        })
      })
    }
  }
}

export const createPlace = [
  check('name')
    .exists()
    .trim()
    .isLength({ max: 200 })
    .custom(checkDuplicateName),
  check('kind').exists().trim().custom(checkKind),
  check('description').exists().trim(),
  check('direction').exists().isLength({ min: 5, max: 100 }),
  validateResult
]
