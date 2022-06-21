import { LogoContainer, Svg } from './Logo.styles'

const Logo = () => (
  <LogoContainer to='/'>
    <Svg
      version='1.2'
      baseProfile='tiny-ps'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 2000 2000'
      width={2000}
      height={2000}
    >
      <title>Nuevo proyecto</title>
      <path
        id='Capa 1'
        className='s0'
        d='m1000 1984.34c-535.3 0-968-440.15-968-984.67c0-544.52 432.7-984.67 968-984.67c535.3 0 968 440.15 968 984.67c0 544.52-432.7 984.67-968 984.67z'
      />
      <path
        id='Layer'
        fillRule='evenodd'
        className='s1'
        d='m940.6 1739.58c-437.41-634.12-518.6-699.2-518.6-932.24c0-319.22 258.78-578 578-578c319.22 0 578 258.78 578 578c0 233.05-81.19 298.13-518.6 932.24c-28.7 41.47-90.1 41.46-118.8 0zm59.4-691.41c133.01 0 240.84-107.82 240.84-240.84c0-133.01-107.82-240.84-240.84-240.84c-133.01 0-240.84 107.82-240.84 240.84c0 133.01 107.82 240.84 240.84 240.84z'
      />
    </Svg>
    <span>CDMXMAPS</span>
  </LogoContainer>
)

export default Logo
