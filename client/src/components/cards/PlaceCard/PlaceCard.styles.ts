import styled from 'styled-components'

export const PlaceCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 20px;
  box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.colors.text}7E;
  height: 300px;
  overflow: hidden;
  width: 300px;

  h3 {
    margin: auto;
    text-align: center;
  }
`
export const Image = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
`
export const PlaceCardBody = styled.div`
  overflow: hidden;
  p {
    font-size: small;
    margin: 10px;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
    max-height: 80px;
    text-align: justify;
  }
`

export const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 0 18px;
`
