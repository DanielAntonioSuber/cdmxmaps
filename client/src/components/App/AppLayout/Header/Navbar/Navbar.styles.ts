import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: inherit;
  display: flex;
`

export const NavbarList = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  margin: auto;

  @media screen and (max-width: 960px) {
    align-items: center;
    background-color: inherit;
    box-shadow: -2px 5px 5px rgba(0, 0, 0, 0.45);
    flex-direction: column;
    justify-content: center;
    left: ${({ open }) => (open ? '0' : '-100%')}; //Import
    padding: 8px 0;
    position: absolute;
    top: 50px;
    transition: left 0.5s ease;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    transition: left 0.3s ease;
  }
`

export const ItemList = styled.li`
  align-items: center;
  display: flex;

  svg {
    font-size: 1.2rem;
    margin-right: 5px;
  }
`

export const NavLinkItem = styled(NavLink)`
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  margin: auto 8px auto auto;
  padding: 8px;
  text-align: center;
  text-decoration: none;

  span {
    margin: auto;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.bg2};
  }

  @media screen and (max-width: 960px) {
    align-items: center;
    background-color: transparent;
    justify-content: center;
    margin: 5px;
    padding: 10px 0;
    width: 92vw;

    svg {
      margin: 0;
    }

    span {
      margin: 0 0 0 10px;
    }
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const MobileIcon = styled.button`
  display: none;

  :active {
    animation: ${spin} 0.5s linear infinite;
  }

  @media screen and (max-width: 960px) {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 1.6rem;
    margin-left: 5px;
    padding: 0;
    user-select: none;

    svg {
      fill: white;
      margin-right: right 0.5rem;
    }
  }
`
