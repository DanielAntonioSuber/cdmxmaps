import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    overflow-y: scroll;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`
