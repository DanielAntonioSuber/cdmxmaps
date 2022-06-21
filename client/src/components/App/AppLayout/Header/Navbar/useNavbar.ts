import { useState } from 'react'

import { FaRegQuestionCircle, FaUserPlus } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'

function useNavbar () {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [menu] = useState([
    { to: 'login', icon: BiLogIn, text: 'Iniciar Sesion' },
    { to: 'register', icon: FaUserPlus, text: 'Registrarse' },
    { to: 'about-us', icon: FaRegQuestionCircle, text: 'Sobre Nosotros' }
  ])

  const handlerShowMobileMenu = () => {
    if (document.body.offsetWidth <= 960 || showMobileMenu) {
      setShowMobileMenu((show) => !show)
    }
  }

  return { handlerShowMobileMenu, showMobileMenu, menu }
}

export default useNavbar
