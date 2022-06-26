import { Prisma } from '@prisma/client'
import prisma from './prisma'

export const createPlace = async (place: Prisma.PlaceCreateInput) =>
  await prisma.place.create({
    data: place
  })

export const findPlaceByName = async (name: string) =>
  await prisma.place.findUnique({ where: { name } })

export const findKind = async (kind: string) =>
  await prisma.kindOfplace.findUnique({ where: { kind } })

export const findPlaceById = async (id: number) => {
  const place = await prisma.place.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      direction: true,
      images: { select: { image: { select: { path: true, name: true } } } },
      kindOfPlace: { select: { kind: true } },
      comments: {
        select: {
          text: true,
          user: {
            select: { username: true, avatarImage: { select: { path: true } } }
          }
        }
      }
    }
  })

  const avg = await prisma.placeRating.groupBy({
    by: ['placeId'],
    where: { place: { id } },
    _avg: { securityRating: true, starRating: true }
  })

  return { ...place, ...avg[0]?._avg }
}

export const findAllPlaces = async (where: Prisma.PlaceWhereInput = {}) => {
  const places = await prisma.place.findMany({
    where,
    select: {
      id: true,
      name: true,
      description: true,
      direction: true,
      images: { select: { image: { select: { path: true, name: true } } } },
      kindOfPlace: { select: { kind: true } }
    }
  })

  const avg = await prisma.placeRating.groupBy({
    by: ['placeId'],
    where: { place: where },
    _avg: { securityRating: true, starRating: true }
  })

  return places.map((place) => {
    const placeAvg = avg.find((avg) => avg.placeId === place.id)
    return { ...place, ...placeAvg?._avg }
  })
}

export const deletePlaceById = async (id: number) =>
  await prisma.place.delete({ where: { id } })
