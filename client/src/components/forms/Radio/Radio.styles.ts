import styled from 'styled-components'

export const RadioContainer = styled.label`
  display: flex;
  font-weight: 500;
  margin: auto;
  overflow: hidden;
  position: relative;
`

export const Input = styled.input`
  left: -9999px;
  position: absolute;
  
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.secondary}6f;
    color: ${({ theme }) => theme.colors.primary};
    
    &:before {
      box-shadow: inset 0 0 0 0.4375em ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const LabelText = styled.span`
  align-items: center;
  border-radius: 99em; 
  display: flex;
  padding: 0.375em 0.75em 0.375em 0.375em;
  transition: 0.25s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}6f;
  }

  &:before {
    background-color: #fff;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.125em ${({ theme }) => theme.colors.secondary}6f;
    content: '';
    display: flex;
    flex-shrink: 0;
    height: 1.2em;
    margin-right: 0.375em;
    transition: 0.25s ease;
    width: 1.2em;
  }
`
