import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string
      bg2: string
      danger: string
      header: string
      header2: string
      primary: string
      secondary: string
      succes: string
      text: string
      title: string
    }

    fonts: {
      heading: string
      body: string
    }

    fontSizes: {
      sm: string
      m: string
      l: string
      xl: string
    }
  }
}
