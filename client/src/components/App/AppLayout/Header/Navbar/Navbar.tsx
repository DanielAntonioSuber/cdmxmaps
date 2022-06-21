import useNavbar from './useNavbar'

import {
  ItemList,
  MobileIcon,
  NavbarContainer,
  NavbarList,
  NavLinkItem
} from './Navbar.styles'

import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar () {
  const { handlerShowMobileMenu, showMobileMenu, menu } = useNavbar()
  return (
    <NavbarContainer onClick={handlerShowMobileMenu}>
      <MobileIcon>{showMobileMenu ? <FaTimes /> : <FaBars />}</MobileIcon>
      <NavbarList open={showMobileMenu}>
        {menu.map((item) => (
          <ItemList key={item.text}>
            <NavLinkItem to={item.to}>
              <item.icon />
              <span>{item.text}</span>
            </NavLinkItem>
          </ItemList>
        ))}
      </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar
