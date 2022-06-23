import { RadioGroup, RegisterFormContainer } from './RegisterForm.styles'

import { LoadingButton } from '@components/buttons'
import { Radio, TextField } from '@components/forms'

function RegisterForm () {
  return (
    <RegisterFormContainer>
      <TextField label='Nombre de usuario' variant='outlined' />
      <TextField label='Correo electrónico' variant='outlined' />
      <TextField label='Contraseña' variant='outlined' />
      <TextField label='Confirmar contraseña' variant='outlined' />
      <RadioGroup>
        <Radio label='Vendedor' />
        <Radio label='Turista' />
      </RadioGroup>
      <LoadingButton loading={false}>Registrarse</LoadingButton>
    </RegisterFormContainer>
  )
}

export default RegisterForm
