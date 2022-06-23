import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@components/App'

import HomePage from './views/Home/HomePage/HomePage'
import LoginPage from './views/Login/LoginPage/LoginPage'
import NotFoundPage from './views/NotFound/NotFoundPage/NotFoundPage'
import RegisterPage from './views/Register/RegisterPage/RegisterPage'

const App = () => (
  <Routes>
    <Route path='/' element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
    </Route>
  </Routes>
)

export default App
