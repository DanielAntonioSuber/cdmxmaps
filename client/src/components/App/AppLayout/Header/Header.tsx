import { useLocation } from 'react-router-dom'

import { HeaderContainer } from './Header.styles'

import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import Searcher from './Searcher/Searcher'

function Header () {
  const { pathname } = useLocation()
  return (
    <HeaderContainer sticky={pathname !== '/'}>
      <Logo />
      <Searcher />
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
