import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type RestaurantCardProps = {
  id: number
  title: string
  category: string
  description: string
  image: string
  avaliacao: number
  destacado: boolean
}

const RestaurantCard = ({
  id,
  title,
  category,
  description,
  image,
  avaliacao,
  destacado,
}: RestaurantCardProps) => {
  const navigate = useNavigate()

  return (
    <S.Card>
      <S.CardImage src={image} alt={title} />
      {destacado && <S.DestaqueBadge>Destaque da semana</S.DestaqueBadge>}
      <S.CardBody>
        <S.CardHeader>
          <S.CardTitle>{title}</S.CardTitle>
          <S.Rating>
            <span>{avaliacao.toFixed(1)}</span>
            <img src="/assets/star.svg" alt="estrela" />
          </S.Rating>
        </S.CardHeader>
        <S.CardCategory>{category}</S.CardCategory>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardButton onClick={() => navigate(`/perfil/${id}`)}>
          Saiba mais
        </S.CardButton>
      </S.CardBody>
    </S.Card>
  )
}

export default RestaurantCard
