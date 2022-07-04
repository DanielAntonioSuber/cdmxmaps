import { FC } from 'react'

import {
  Image,
  PlaceCardBody,
  PlaceCardContainer,
  Scores
} from './PlaceCard.styles'

import { SecurtyScore, StarScore } from '@components/others'

type PlaceCardProps = {
  imgSrc: string
  placeName: string
  starScore: number
  securityScore: number
  text: string
}

const PlaceCard: FC<PlaceCardProps> = ({
  imgSrc,
  placeName,
  securityScore,
  starScore,
  text
}) => (
  <PlaceCardContainer>
    <Image src={imgSrc} />
    <h3>{placeName}</h3>
    <PlaceCardBody>
      <Scores>
        <StarScore starScore={starScore} />
        <SecurtyScore securtyScore={securityScore} />
      </Scores>
      <p>{text}</p>
    </PlaceCardBody>
  </PlaceCardContainer>
)

export default PlaceCard
