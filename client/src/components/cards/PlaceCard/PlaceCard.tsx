import {
  Image,
  PlaceCardBody,
  PlaceCardContainer,
  Scores
} from './PlaceCard.styles'
import bellasArtes from '@assets/bellasArtes.jpeg'
import { SecurtyScore, StarScore } from '@components/others'

function PlaceCard () {
  return (
    <PlaceCardContainer>
      <Image src={bellasArtes} />
      <h3>Bellas Artes</h3>
      <PlaceCardBody>
        <Scores>
          <StarScore starScore={5} />
          <SecurtyScore securtyScore={5} />
        </Scores>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis
          inventore sed voluptates nihil nulla aperiam repudiandae minima
          similique voluptas error perspiciatis eos modi in, sequi ad tempore
          eaque est.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex quod veniam harum, labore eaque adipisci in, pariatur velit reprehenderit dolorum magnam perspiciatis voluptas ab fugiat consequuntur aspernatur molestias nisi!
        </p>
      </PlaceCardBody>
    </PlaceCardContainer>
  )
}

export default PlaceCard
