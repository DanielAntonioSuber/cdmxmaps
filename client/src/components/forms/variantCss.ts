import { css } from 'styled-components'

export const variantCss = (variant: 'standard' | 'outlined') => css`
  ${() => {
    switch (variant) {
      case 'standard':
        return css`
          background: transparent;
          border: none;
          border-bottom: 2px solid ${({ theme }) => theme.colors.text}49;
          :focus {
            border-color: ${({ theme }) => theme.colors.secondary};
          }
        `
      case 'outlined':
        return css`
          padding: 0 1rem;
          border-radius: 8px;
          border: 2px solid ${({ theme }) => theme.colors.text}49;
          :focus {
            border-color: ${({ theme }) => theme.colors.secondary};
            outline: 0 none;
          }
        `
      default:
        return css`
          border: 2px solid ${({ theme }) => theme.colors.text}49;
        `
    }
  }}
`
