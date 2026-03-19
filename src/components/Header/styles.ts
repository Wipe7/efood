import styled from 'styled-components'
import { colors } from '../../styles/colors'

type HeaderContainerProps = {
  isHomePage?: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${colors.salmon};
  background-image: url('/assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  padding: ${({ isHomePage }) => (isHomePage ? '40px 0 160px' : '24px 0')};
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const Logo = styled.h1`
  font-size: 36px;
  font-style: italic;
  color: ${colors.salmon};
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.salmon};
  text-align: center;
  line-height: 1.2;
`

export const BackLink = styled.span`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`
