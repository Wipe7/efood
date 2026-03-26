import styled from 'styled-components'
import { colors } from '../../styles/colors'

type HeaderContainerProps = {
  isHomePage?: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${colors.cream};
  background-image: url('/assets/hero-bg.png');
  background-repeat: repeat;
  background-size: auto;
  display: flex;
  align-items: center;
  height: ${({ isHomePage }) => (isHomePage ? '360px' : 'auto')};
  padding: ${({ isHomePage }) => (isHomePage ? '0' : '24px 0')};
`

export const HeaderContent = styled.div<HeaderContainerProps>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: ${({ isHomePage }) => (isHomePage ? 'column' : 'row')};
  align-items: center;
  justify-content: ${({ isHomePage }) => (isHomePage ? 'center' : 'space-between')};
  gap: ${({ isHomePage }) => (isHomePage ? '40px' : '0')};
`

export const LogoImg = styled.img`
  height: 40px;
`

export const Tagline = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.salmon};
  text-align: center;
  line-height: 42px;
  max-width: 540px;
`

export const BackLink = styled.span`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const CartInfo = styled.span`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
`
