import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  padding: 40px 0;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const LogoImg = styled.img`
  height: 40px;
  margin-bottom: 32px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  list-style: none;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  max-width: 480px;
  color: ${colors.salmon};
  text-align: center;
  line-height: 1.6;
`
