import styled, { css } from 'styled-components'

import Input from '../Input'

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextFieldGroup = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: 2.5rem;
  position: relative;
  width: 20rem;
`

export const StyledInput = styled(Input)<{ error: boolean }>`
  background-color: transparent;
  height: 100%;
  left: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors.danger};
      &:focus {
        border-color: ${theme.colors.danger};
      }
    `}
`

export const Label = styled.label<{ variant: string }>`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text}af;
  cursor: text;
  left: ${({ variant }) => (variant === 'standard' ? '0rem' : '1rem')};
  margin: 0;
  padding: ${({ variant }) => (variant === 'standard' ? '0' : '0 0.4rem')};
  position: absolute;
  top: 0.7rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size ease-in;
  
  ${StyledInput}:focus ~ &&,
  ${StyledInput}:not(:placeholder-shown)${StyledInput}:not(:focus) ~ && {
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 0.8rem;
    left: ${({ variant }) => (variant === 'standard' ? '0' : '0.8rem')};
    top: ${({ variant }) => (variant === 'standard' ? '-0.8rem;' : '-0.5rem ')};
  }

  ${StyledInput}:focus ~ &{
    color: ${({ theme }) => theme.colors.secondary}cf;
  }
`

export const ErrorWrapper = styled.div`
  font-size: 0.95rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.danger};
`
