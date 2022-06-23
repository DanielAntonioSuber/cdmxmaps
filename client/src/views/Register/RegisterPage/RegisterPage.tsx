import RegisterForm from '../RegisterForm/RegisterForm'
import { RegisterContainer, RegisterWrapper } from './Register.styles'

function RegisterPage () {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <h1>Registro</h1>
        <RegisterForm />
      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default RegisterPage
