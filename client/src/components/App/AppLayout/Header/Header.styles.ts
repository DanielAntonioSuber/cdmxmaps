import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ sticky: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header2};
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 18px;

  ${({ sticky }) =>
    sticky &&
    css`
      box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.5);
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: ${({ theme }) => theme.colors.header};
    `}
`
