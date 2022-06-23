import { Prisma, PrismaClient, User } from '@prisma/client'
import { encryptPassword } from '../utils/libs/jwt'

const prisma = new PrismaClient()

const encryptUserPassword: Prisma.Middleware<any> = async (params, next) => {
  if (params.model === 'User' && params.action === 'create') {
    params.args.data = {
      ...(params.args.data as User),
      password: await encryptPassword((params.args.data as User).password)
    } as User
    return next(params)
  }

  if (params.model === 'User' && params.action === 'createMany') {
    params.args.data = (await Promise.all(
      (params.args.data as User[]).map(async (user) => ({
        ...user,
        password: await encryptPassword(user.password)
      }))
    )) as User[]

    return next(params)
  }
  return next(params)
}

prisma.$use(encryptUserPassword)

export default prisma
