import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  padding: 40px 0;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
`

export const LogoImg = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  list-style: none;
  margin-bottom: 80px;

  li {
    cursor: pointer;
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  max-width: 480px;
  color: #E66767;
  text-align: center;
  line-height: 1.6;
`
