import styled from 'styled-components'
import { variantCss } from './variantCss'

const TextArea = styled.textarea<{variant: 'standard' | 'outlined'}>`
  ${({ variant }) => variantCss(variant)}
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
`

export default TextArea
