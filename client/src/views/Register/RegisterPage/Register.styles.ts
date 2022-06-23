import { MainContainer } from '@components/containers'
import styled from 'styled-components'

export const RegisterContainer = styled(MainContainer)`
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.header2} 20%,
    ${({ theme }) => theme.colors.secondary} 99.88%
  );
  display: flex;

  @media screen and (max-width: 550px) {
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: none;
  }
`

export const RegisterWrapper = styled.div`
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
    margin-bottom: 25px;
    margin-top: 0;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    box-shadow: none;
    margin: 0 auto auto auto;
  }
`
