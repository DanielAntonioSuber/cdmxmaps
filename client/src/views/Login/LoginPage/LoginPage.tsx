import { Form, IconWrapper, LoginContainer, LoginWrapper } from './Login.styles'

import { FaUserCircle } from 'react-icons/fa'
import { TextField } from '@components/forms'
import { LoadingButton } from '@components/buttons'

function LoginPage () {
  return (
    <LoginContainer>
      <LoginWrapper>
        <h1>Iniciar Sesión</h1>
        <IconWrapper>
          <FaUserCircle />
        </IconWrapper>
        <Form>
          <TextField label='Nombre' />
          <TextField label='Contraseña' type='password' />
          <LoadingButton loading={false}>Iniciar Sesión</LoadingButton>
        </Form>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default LoginPage
