import styled from 'styled-components'
import { colors } from '../../styles/colors'

type HeaderContainerProps = {
  isHomePage?: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${colors.salmon};
  height: ${({ isHomePage }) => (isHomePage ? '384px' : 'auto')};
  padding: ${({ isHomePage }) => (isHomePage ? '0' : '24px 0')};
  display: flex;
  align-items: center;

  ${({ isHomePage }) =>
    isHomePage &&
    `
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1440');
    background-size: cover;
    background-position: center;
  `}
`

export const HeaderContent = styled.div<HeaderContainerProps>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ isHomePage }) => (isHomePage ? '40px' : '16px')};
`

export const Logo = styled.h1`
  font-size: 32px;
  font-style: italic;
  font-weight: 900;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  padding: 4px 16px;
  line-height: 1.2;
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.white};
  text-align: center;
  line-height: 1.3;
`

export const BackLink = styled.span`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`
