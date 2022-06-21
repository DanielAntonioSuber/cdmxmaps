import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  font-weight: bold;
  text-decoration: none;

  :active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Svg = styled.svg`
  height: 30px;
  margin-right: 5px;
  width: 30px;

  span {
    white-space: pre;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  .s0 {
    fill: ${({ theme }) => theme.colors.secondary};
  }
  
  .s1 {
    fill: #ffffff;
    stroke: #000000;
    stroke-width: 0;
  }
`
