import { AVATAR_PATH } from '../config/app'
import prisma from './prisma'

export async function createDefaultAvatar () {
  const avatarImage = await prisma.image.findUnique({
    where: { path: AVATAR_PATH }
  })
  if (avatarImage === null) {
    const image = await prisma.image.create({
      data: { name: 'Avatar', path: AVATAR_PATH }
    })
    console.log('Created default avatar', image)
  } else {
    console.log('Default avatar already exists')
  }
}

export const getDefaultAvatar = async () =>
  prisma.image.findUnique({ where: { path: AVATAR_PATH } })
