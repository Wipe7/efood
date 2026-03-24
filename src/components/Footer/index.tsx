import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.Logo>efood</S.Logo>
        <S.SocialLinks>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/assets/instagram.svg" alt="Instagram" /></a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="/assets/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/assets/twitter.svg" alt="Twitter" /></a></li>
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
