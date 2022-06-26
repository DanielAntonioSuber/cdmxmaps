import { API_URL } from '@/config/api'
import axios from 'axios'

const api = axios.create({
  baseURL: API_URL
})

export default api
