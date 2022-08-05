import styled, { css } from 'styled-components'

import Input from '../Input'
import TextArea from '../TextArea'

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const TextFieldGroup = styled.div<{ multiline: boolean }>`
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: ${({ multiline }) => (multiline ? '5rem' : '2.5rem')};
  position: relative;
  width: 20rem;
`

const textFieldCss = (error: boolean) => css`
  background-color: transparent;
  height: 100%;
  left: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;

  ${({ theme }) =>
    error &&
    css`
      border-color: ${theme.colors.danger};
      &:focus {
        border-color: ${theme.colors.danger};
      }
    `}
`

export const StyledInput = styled(Input)<{ error: boolean }>`
  ${({ error }) => textFieldCss(error)}
`

export const StyledTextArea = styled(TextArea)<{ error: boolean }>`
  ${({ error }) => textFieldCss(error)}
  padding-top: 10px;
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
  ${StyledInput}:not(:placeholder-shown)${StyledInput}:not(:focus) ~ &&,
  ${StyledTextArea}:focus ~ &&,
  ${StyledTextArea}:not(:placeholder-shown)${StyledTextArea}:not(:focus) ~ && {
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 0.8rem;
    left: ${({ variant }) => (variant === 'standard' ? '0' : '0.8rem')};
    top: ${({ variant }) => (variant === 'standard' ? '-0.8rem;' : '-0.5rem ')};
  }

  ${StyledInput}:focus + &,
  ${StyledTextArea}:focus + & {
    color: ${({ theme }) => theme.colors.secondary}cf;
  }
`

export const ErrorWrapper = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.95rem;
  padding: 0 0.5rem;
`
