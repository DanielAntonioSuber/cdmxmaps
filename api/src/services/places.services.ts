import { Prisma } from '@prisma/client'
import prisma from '../utils/libs/prisma'

export const createPlace = async (place: Prisma.PlaceCreateInput) =>
  await prisma.place.create({
    data: place
  })

export const findPlaceByName = async (name: string) =>
  await prisma.place.findUnique({ where: { name } })

export const findKind = async (kind: string) =>
  await prisma.kindOfplace.findUnique({ where: { kind } })

export const findPlaceById = async (id: number, validated: boolean = true) =>
  await prisma.place.findFirst({
    where: { id, validated },
    include: {
      images: { include: { image: true } },
      kindOfPlace: true,
      comments: { include: { user: true } },
      placeRatings: true
    }
  })

export const findAllPlaces = async (validated: boolean = false) =>
  await prisma.place.findMany({
    where: { validated },
    include: {
      images: { include: { image: true } },
      kindOfPlace: true,
      comments: { include: { user: true } },
      placeRatings: true
    }
  })
