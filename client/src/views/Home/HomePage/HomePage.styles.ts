import styled from 'styled-components'

export const BannerContainer = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.header2} 0%,
    ${({ theme }) => theme.colors.bg2} 100%
  );
  display: flex;
  justify-content: space-around;
  padding: 30px;

  @media screen and (max-width: 960px) {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`

export const TextWrapper = styled.div`
  color: white;
  margin: 10px;
  width: 30%;

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: left;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  white-space: pre-line;
`

export const Img = styled.img`
  border-radius: 8px;
  height: auto;
  margin: auto 0;
  width: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`

export const CardsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
`
