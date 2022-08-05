import styled, { css } from 'styled-components'
import { VscTriangleDown } from 'react-icons/vsc'

import { variantCss } from '../variantCss'

export const SelectContainer = styled.div``

export const SelectGroup = styled.div<{
  variant: 'standard' | 'outlined'
  error: boolean
}>`
  ${({ variant }) => variantCss(variant)}
  height: 40px;
  position: relative;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  user-select: none;

  ${({ theme, error }) =>
    error &&
    css`
      border-color: ${theme.colors.danger};
      &:focus {
        border-color: ${theme.colors.danger};
      }
    `}
`

export const Icon = styled(VscTriangleDown)<{ open: boolean }>`
  margin: auto;
  color: ${({ theme }) => theme.colors.secondary}cf;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: auto;
  outline: none;
  left: 0;
  background-color: transparent;
  border: none;
  :disabled {
    color: inherit;
  }
`

export const DropDown = styled.ul`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg2}ef;
  color:  ${({ theme }) => theme.colors.bg};
  border-radius: 10px;
  cursor: default;
  display: flex;
  flex-direction: column;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 8px 0;
  position: absolute;
  top: 40px;
  width: 100%;
`

export const Label = styled.label<{ variant: 'outlined' | 'standard' }>`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text}af;
  cursor: text;
  left: ${({ variant }) => (variant === 'standard' ? '0rem' : '1rem')};
  margin: 0;
  padding: ${({ variant }) => (variant === 'standard' ? '0' : '0 0.4rem')};
  position: absolute;
  top: 0.6rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size ease-in;

  ${SelectGroup}:focus &&,
  ${Input}:not(:placeholder-shown) ~ && {
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 0.8rem;
    left: ${({ variant }) => (variant === 'standard' ? '0' : '0.8rem')};
    top: ${({ variant }) => (variant === 'standard' ? '-0.8rem;' : '-0.6rem ')};
  }

  ${SelectGroup}:focus & {
    color: ${({ theme }) => theme.colors.secondary}cf;
  }
`
