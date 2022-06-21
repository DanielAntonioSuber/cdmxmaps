import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@components/App'

import HomePage from './views/Home/HomePage/HomePage'
import LoginPage from './views/Login/LoginPage/LoginPage'
import NotFoundPage from './views/NotFound/NotFoundPage/NotFoundPage'

const App = () => (
  <Routes>
    <Route path='/' element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
)

export default App
