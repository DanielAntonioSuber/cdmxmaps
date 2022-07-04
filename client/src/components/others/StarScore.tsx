import { FC } from 'react'
import Score from './Score/Score'

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

type StarScoreProps = { starScore: number }

const StarScore: FC<StarScoreProps> = ({ starScore }) => (
  <Score
    color='orange'
    score={starScore}
    IconSolid={BsStarFill}
    IconOutline={BsStar}
    IconHalf={BsStarHalf}
  />
)

export default StarScore
