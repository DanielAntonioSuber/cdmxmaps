import styled from 'styled-components'

export const ScoreContainer = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`
