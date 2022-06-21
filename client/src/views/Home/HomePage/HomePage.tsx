import {
  BannerContainer,
  CardsContainer,
  Img,
  Paragraph,
  TextWrapper,
  Title
} from './HomePage.styles'

import { BsShield } from 'react-icons/bs'
import { FaGlassWhiskey, FaMapMarkerAlt } from 'react-icons/fa'
import { GiWavyItinerary } from 'react-icons/gi'
import bellasArtes from '@assets/bellasArtes.jpeg'
import InfoCard from '../InfoCard/InfoCard'

function HomePage () {
  return (
    <>
      <BannerContainer>
        <TextWrapper>
          <Title>Cdmxmaps</Title>
          <Paragraph>
            La aplicación para turistas preferida.{'\n\n'}
            Encuentra lugares impresionantes dentro de la cdmx.
          </Paragraph>
        </TextWrapper>
        <Img src={bellasArtes} alt='bellas artes' />
      </BannerContainer>
      <CardsContainer>
        <InfoCard
          logo={<GiWavyItinerary />}
          info='Nuestro itinerario te servirá para poder organizar todos los viajes que te propongas dentro de esta bella ciudad.'
        />
        <InfoCard
          logo={<FaMapMarkerAlt />}
          info='Nuestro mapa es un orientador dentro de la ciudad. Te ayudará a encontrar los lugares que necesites de un modo fácil.'
        />
        <InfoCard
          logo={<FaGlassWhiskey />}
          info='¿Necesitas comprar un regalito? ¿No sabes dónde comer? No te preocupes, nosotros te ayudamos con esta cuestión; te indicaremos cuales son los negocios locales de la ciudad que estén cerca de ti.'
        />
        <InfoCard
          logo={<BsShield />}
          info='¡Nosotros te cuidamos! Tomamos todas las estadísticas que nos ayuden a cuidarte a ti y a tu familia.'
        />
      </CardsContainer>
    </>
  )
}

export default HomePage
