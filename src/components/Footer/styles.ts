import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterContainer = styled.footer`
  background-color: ${colors.salmon};
  padding: 40px 0;
  margin-top: auto;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const Logo = styled.h2`
  font-size: 28px;
  font-style: italic;
  font-weight: 900;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  padding: 4px 12px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }
`

export const FooterText = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 14px;
  color: ${colors.white};
  line-height: 1.6;
`
