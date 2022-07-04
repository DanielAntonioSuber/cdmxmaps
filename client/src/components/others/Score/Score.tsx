import { IconType } from 'react-icons'
import { ScoreContainer } from './Score.styles'

function Score ({
  score,
  IconSolid,
  IconOutline,
  IconHalf,
  color
}: {
  score: number
  IconSolid: IconType
  IconOutline: IconType
  IconHalf: IconType
  color: string
}) {
  const scores = Array(5).fill('solid', 0, score).fill('outline', score, 5)

  if (Math.ceil(score) !== score) scores[Math.ceil(score - 1)] = 'half'

  return (
    <ScoreContainer color={color}>
      {scores.map((e, index) =>
        e === 'solid'
          ? (
          <IconSolid key={index} />
            )
          : e === 'outline'
            ? (
          <IconOutline key={index} />
              )
            : (
          <IconHalf key={index} />
              )
      )}
    </ScoreContainer>
  )
}

export default Score
