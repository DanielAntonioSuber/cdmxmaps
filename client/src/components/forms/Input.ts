import styled from 'styled-components'
import { variantCss } from './variantCss'

const Input = styled.input<{
  variant: 'outlined' | 'standard'
}>`
  ${({ variant }) => variantCss(variant)}
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
`

export default Input
