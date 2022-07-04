import { FC } from 'react'
import { BsShield, BsShieldFill, BsShieldShaded } from 'react-icons/bs'

import Score from './Score/Score'

type SecurtyScoreProps = { securtyScore: number }

const SecurtyScore: FC<SecurtyScoreProps> = ({ securtyScore }) => (
  <Score
    color='#5037C8'
    score={securtyScore}
    IconSolid={BsShieldFill}
    IconOutline={BsShield}
    IconHalf={BsShieldShaded}
  />
)

export default SecurtyScore
