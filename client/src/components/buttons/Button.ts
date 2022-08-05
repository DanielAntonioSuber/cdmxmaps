import styled, { css } from 'styled-components'

const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'succes' | 'danger'
}>`
  border-radius: 18px;
  color: white;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 2.5rem;
  padding: 0.2rem 0.8rem;
  justify-content: center;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          :hover {
            box-shadow: 0px 0px 6px 1px ${theme.colors.primary}B4;
          }
          :disabled {
            background-color: ${theme.colors.primary}cc;
            border-color: ${theme.colors.primary}cc;
            :hover {
              box-shadow: none;
            }
          }
        `
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.secondary};
          :hover {
            box-shadow: 0px 0px 6px 1px ${theme.colors.secondary}B4;
          }
          :disabled {
            background-color: ${theme.colors.secondary}cc;
            border-color: ${theme.colors.secondary}cc;
            :hover {
              box-shadow: none;
            }
          }
        `
      case 'danger':
        return css`
          background-color: ${theme.colors.danger};
          border: 1px solid ${theme.colors.danger};
          :hover {
            box-shadow: 0px 0px 6px 1px ${theme.colors.danger}B4;
          }
          :disabled {
            background-color: ${theme.colors.danger}cc;
            border-color: ${theme.colors.danger}cc;
            :hover {
              box-shadow: none;
            }
          }
        `
      case 'succes':
        return css`
          background-color: ${theme.colors.succes};
          border: 1px solid ${theme.colors.succes};
          :hover {
            box-shadow: 0px 0px 6px 1px ${theme.colors.succes}B4;
          }
          :disabled {
            background-color: ${theme.colors.succes}cc;
            border-color: ${theme.colors.succes}cc;
            :hover {
              box-shadow: none;
            }
          }
        `
      default:
        return css`
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          :hover {
            box-shadow: 0px 0px 6px 1px ${theme.colors.primary}B4;
          }
          :disabled {
            background-color: ${theme.colors.primary}cc;
            border-color: ${theme.colors.primary}cc;
            :hover {
              box-shadow: none;
            }
          }
        `
    }
  }};
`

export default Button
