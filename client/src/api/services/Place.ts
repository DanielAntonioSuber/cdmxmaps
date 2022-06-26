import api from '../api'

export type placeData = {
  comments?: {
    text: string
    user: {
      username: string
      avatarImage: {
        path: string
      }
    }
  }[]
  createdAt?: string
  description: string
  direction: string
  id: number
  images: { image: { name: string; path: string } }[]
  kindOfPlace: { kind: string }
  name: string
  securityRating?: number
  starRating?: number
  updatedAt?: string
}

export const createPlaceRequest = async (place: {
  name: string
  description: string
  direction: string
  imageOfPlace: FileList
  kind: string
}) => {
  const form = new FormData()

  form.append('name', place.name)
  form.append('description', place.description)
  form.append('kind', place.kind)
  form.append('direction', place.direction)

  for (const image of place.imageOfPlace) {
    form.append('imageOfPlace', image)
  }

  return api.post<{ msg: string }>('/places', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getPlacesRequest = async () =>
  await api.get<placeData[]>('/places/?validated=true')

export const getUnvalidatedPlaces = async () =>
  await api.get<placeData[]>('/places/?validated=false')

export const getAllPlacesRequest = async () =>
  await api.get<placeData[]>('/places/')

export const getPlaceByIdRequest = async (id: number) =>
  await api.get<placeData>(`/places/${id}`)

export const deletePlaceRequest = async (id: number) =>
  await api.delete<placeData>(`/places/${id}`)
