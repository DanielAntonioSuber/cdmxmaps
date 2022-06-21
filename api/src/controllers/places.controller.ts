import { Response, Express, Request } from 'express'
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
    images: { create: images }
  })

  res.status(201).json({ msg: 'Place was created' })
}

export async function getPlaceById (
  req: TypedRequestQuery<{ id: string }>,
  res: Response
) {
  const id = parseInt(req.params.id)
  const place = await service.findPlaceById(id, false)
  res.json(place)
}

export async function getAllPlaces (_req: Request, res: Response) {
  const places = await service.findAllPlaces()
  res.json(places)
}
