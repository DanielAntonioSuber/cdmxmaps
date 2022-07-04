import { Dispatch, SetStateAction, useState } from 'react'
import { IconType } from 'react-icons'
import { RatingContainer } from './Rating.styles'

type ratingProps = {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
  FillIcon: IconType
  OutLineIcon: IconType
  color: string
}

function Rating ({
  number,
  setNumber,
  FillIcon,
  OutLineIcon,
  color
}: ratingProps) {
  const [hoverStar, setHoverStar] = useState<number>(undefined!)
  return (
    <RatingContainer>
      {Array(5)
        .fill('')
        .map((_, index) =>
          number >= index + 1 || hoverStar >= index + 1
            ? (
            <FillIcon
              key={'fill' + index}
              onMouseOver={() => !number && setHoverStar(index + 1)}
              onMouseLeave={() => setHoverStar(undefined!)}
              style={{ color: color || 'black' }}
              onClick={() => setNumber(index + 1)}
            />
              )
            : (
            <OutLineIcon
              key={'outline' + index}
              onMouseOver={() => !number && setHoverStar(index + 1)}
              onMouseLeave={() => setHoverStar(undefined!)}
              style={{ color: color || 'black' }}
              onClick={() => setNumber(index + 1)}
            />
              )
        )}
    </RatingContainer>
  )
}

export default Rating
