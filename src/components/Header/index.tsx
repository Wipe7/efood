import { Link } from 'react-router-dom'
import * as S from './styles'

type HeaderProps = {
  isHomePage?: boolean
}

const Header = ({ isHomePage = false }: HeaderProps) => {
  return (
    <S.HeaderContainer isHomePage={isHomePage}>
      <S.HeaderContent isHomePage={isHomePage}>
        {!isHomePage && (
          <Link to="/">
            <S.BackLink>Restaurantes</S.BackLink>
          </Link>
        )}
        <S.Logo>efood</S.Logo>
        {isHomePage && <S.Tagline>Viva experiências gastronômicas<br />no conforto da sua casa</S.Tagline>}
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
