import styled, { keyframes } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'

const spin = keyframes`
  0% {
      transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled(BiLoaderAlt)`
  animation: ${spin} 1s linear infinite;
  font-size: 30px;
  margin: auto;
`
