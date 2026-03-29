import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import * as S from './styles'

type HeaderProps = {
  isHomePage?: boolean
}

const Header = ({ isHomePage = false }: HeaderProps) => {
  const items = useAppSelector((state) => state.cart.items)
  const totalItems = items.reduce((acc, i) => acc + i.quantidade, 0)

  if (isHomePage) {
    return (
      <>
        <S.HeaderContainer>
          <S.HeaderContent isHomePage>
            <Link to="/">
              <S.LogoImg src="/assets/logo.png" alt="efood" />
            </Link>
          </S.HeaderContent>
        </S.HeaderContainer>
        <S.HeroSection>
          <S.Tagline>
            Viva experiências gastronômicas<br />no conforto da sua casa
          </S.Tagline>
        </S.HeroSection>
      </>
    )
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link to="/"><S.BackLink>Restaurantes</S.BackLink></Link>
        <Link to="/"><S.LogoImg src="/assets/logo.png" alt="efood" /></Link>
        <S.CartInfo>{totalItems} produto(s) no carrinho</S.CartInfo>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
