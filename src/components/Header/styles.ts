import styled from 'styled-components'
import { colors } from '../../styles/colors'

type HeaderContainerProps = {
  isHomePage?: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${({ isHomePage }) => (isHomePage ? colors.cream : colors.salmon)};
  padding: ${({ isHomePage }) => (isHomePage ? '40px 0 80px' : '24px 0')};
`

export const HeaderContent = styled.div<HeaderContainerProps>`
  max-width: 1024px;
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
  color: ${colors.salmon};
  border: 2px solid ${colors.salmon};
  padding: 4px 16px;
  line-height: 1.2;
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.salmon};
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
