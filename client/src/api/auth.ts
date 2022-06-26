import api from './api'

export type SignUpData = {
  message: string
}

export type SignInData = {
  accessToken: string
  user: {
    id: number
    username: string
    email: string
    role: string
    avatarImage: {
      path: string
      name: string
    }
  }
}

export const signInUser = async (
  password: string,
  username?: string,
  email?: string
) => await api.post<SignUpData>('/auth/signin', { username, password, email })

export const signUpUser = async (
  username: string,
  email: string,
  password: string,
  role: string
) =>
  await api.post<SignUpData>('/auth/signup', {
    username,
    email,
    password,
    role
  })
