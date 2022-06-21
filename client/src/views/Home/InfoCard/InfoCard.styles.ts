import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color:  ${({ theme }) => theme.colors.header2}7a;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 30px;
  min-height: 300px;
  width: 300px;
`

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  color: white;
  display: flex;
  height: 100px;
  margin: 30px auto;
  width: 100px;
  
  svg {
    font-size: 65px;
    margin: auto;
  }
`

export const Info = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.4;
  margin: 25px;
  text-align: justify;
`
