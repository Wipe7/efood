import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoImg src="/assets/logo.png" alt="efood" />
        <S.SocialLinks>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/assets/instagram.png" alt="Instagram" /></a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="/assets/facebook.png" alt="Facebook" /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/assets/twitter.png" alt="Twitter" /></a></li>
        </S.SocialLinks>
        <S.FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
          e idoneidade dos produtos é toda do estabelecimento contratado.
        </S.FooterText>
      </S.FooterContent>
    </S.FooterContainer>
  )
}

export default Footer
