import styled from 'styled-components'
import { colors } from '../../styles/colors'

type HeaderContainerProps = {
  isHomePage?: boolean
}

export const HeaderContainer = styled.header`
  background-image: url('/assets/hero-bg.png');
  background-color: ${colors.cream};
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.div<HeaderContainerProps>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: ${({ isHomePage }) => (isHomePage ? 'center' : 'space-between')};
  align-items: center;
  font-weight: 900;
  font-size: 18px;
`

export const HeroSection = styled.div`
  background-image: url('/assets/hero-bg.png');
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 16px;
`

export const LogoImg = styled.img`
  height: 40px;
  cursor: pointer;
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
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const CartInfo = styled.span`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
`
