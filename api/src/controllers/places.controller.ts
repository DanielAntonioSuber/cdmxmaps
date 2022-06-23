import { Response, Request, Express } from 'express'
import { TypedRequestBody, TypedRequestQuery } from '../types'

import * as service from '../services/places.services'

type CreatePlaceBody = {
  name: string
  description: string
  direction: string
  kind: string
}

export async function createPlace (
  req: TypedRequestBody<CreatePlaceBody>,
  res: Response
) {
  const { description, direction, kind, name } = req.body
  const images = (req.files as Express.Multer.File[]).map(
    ({ path, filename }) => ({ image: { create: { path, name: filename } } })
  )

  await service.createPlace({
    description,
    direction,
    name,
    kindOfPlace: { connect: { kind } },
    images: { create: images },
    user: { connect: { id: (req.user as { id: number }).id } }
  })

  res.status(201).json({ msg: 'Place was created' })
}

export async function getPlaceById (
  req: TypedRequestQuery<{ filter: string }>,
  res: Response
) {
  const id = parseInt(req.params.id)
  if (req.query.filter === 'unvalidated') {
    const places = await service.findPlaceById(id, { validated: false })
    return res.json(places)
  } else if (req.query.filter === 'validated') {
    const places = await service.findPlaceById(id, { validated: false })
    return res.json(places)
  }
  const places = await service.findPlaceById(id)
  return res.json(places)
}

export async function getAllPlaces (
  req: TypedRequestQuery<{ filter: string }>,
  res: Response
) {
  if (req.query.filter === 'unvalidated') {
    const places = await service.findAllPlaces({ validated: false })
    return res.json(places)
  } else if (req.query.filter === 'validated') {
    const places = await service.findAllPlaces({ validated: false })
    return res.json(places)
  }
  const places = await service.findAllPlaces()
  return res.json(places)
}

export async function deletePlace (req: Request, res: Response) {
  const placeId = parseInt(req.params.id)
  const place = await service.deletePlaceById(placeId)
  res.json({ msg: 'Lugar eliminado', place })
}
