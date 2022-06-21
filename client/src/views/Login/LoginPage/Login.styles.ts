import styled from 'styled-components'

import { MainContainer } from '@components/containers'
import { TextFieldGroup } from '@components/forms/TextField/TextField.styles'

export const LoginContainer = styled(MainContainer)`
  background-image: linear-gradient(
    95deg,
    ${({ theme }) => theme.colors.header2} 20%,
    ${({ theme }) => theme.colors.primary} 99.88%
  );
  display: flex;

  @media screen and (max-width: 550px) {
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: none;
  }
`

export const LoginWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 15px;
  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  padding: 20px;
  width: 100%;

  h1 {
    margin-bottom: 8px;
    margin-top: 0;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    box-shadow: none;
    margin: 0 auto auto auto;
  }
`

export const IconWrapper = styled.div`
  margin: 10px auto auto;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 100px;
  }
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;

  button {
    margin-top: 28px;
  }

  ${TextFieldGroup} {
    margin-top: 25px;
  }

  @media screen and (max-width: 550px) {
    button {
      margin-top: 38px;
    }
  }
`
