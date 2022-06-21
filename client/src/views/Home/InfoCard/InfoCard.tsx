import { ReactNode } from 'react'
import { CardContainer, LogoWrapper, Info } from './InfoCard.styles'

function InfoCard ({ logo, info }: { logo: ReactNode; info: string }) {
  return (
    <CardContainer>
      <LogoWrapper>{logo}</LogoWrapper>
      <Info>{info}</Info>
    </CardContainer>
  )
}
export default InfoCard
