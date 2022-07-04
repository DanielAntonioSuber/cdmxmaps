import Score from './Score/Score'

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FC } from 'react'

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
