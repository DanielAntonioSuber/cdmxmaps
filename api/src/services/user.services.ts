import { User } from '@prisma/client'

import { AVATAR_PATH } from '../config/app'
import { getDefaultAvatar } from './image.services'
import prisma from '../utils/libs/prisma'

export async function createAdmins () {
  const avatarImage = await getDefaultAvatar()
  if (avatarImage !== null) {
    const users = await prisma.user.findMany({
      where: { OR: [{ username: 'admin1' }, { username: 'admin2' }] }
    })
    if (users.length === 0) {
      await prisma.user.createMany({
        data: [
          {
            username: 'admin1',
            email: 'admin1@email.com',
            password: 'adminpassword',
            imageId: avatarImage.id
          },
          {
            username: 'admin2',
            email: 'admin2@email.com',
            password: 'adminpassword',
            imageId: avatarImage.id
          }
        ]
      })
    }
  }
}

export async function createUser ({ username, email, password, role }: User) {
  return await prisma.user.create({
    data: {
      email,
      username,
      password,
      role,
      avatarImage: { connect: { path: AVATAR_PATH } }
    }
  })
}

export const findUserByUsername = async (username: string) =>
  await prisma.user.findUnique({ where: { username } })

export const findUserByEmail = async (email: string) =>
  await prisma.user.findUnique({ where: { email } })

export const findUserById = async (id: number) =>
  await prisma.user.findUnique({ where: { id } })

export const findUserByEmailOrUsername = async (
  email: string,
  username: string
) =>
  await prisma.user.findFirst({
    where: { email, username },
    include: { avatarImage: { select: { name: true, path: true } } }
  })
