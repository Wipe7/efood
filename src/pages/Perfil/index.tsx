import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as S from './styles'

const restaurants = [
  {
    id: 1,
    title: 'Pizza Hut',
    category: 'Italiana',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200',
    avaliacao: 4.9,
    tipo: 'Pizzaria',
    pratos: [
      {
        id: 1,
        nome: 'Pizza Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão fresco e azeite extra virgem.',
        preco: 40.9,
        foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
      },
      {
        id: 2,
        nome: 'Pizza Pepperoni',
        descricao: 'Molho de tomate, mussarela e fatias generosas de pepperoni.',
        preco: 45.9,
        foto: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400',
      },
      {
        id: 3,
        nome: 'Pizza Quatro Queijos',
        descricao: 'Mussarela, parmesão, gorgonzola e catupiry sobre molho branco.',
        preco: 48.9,
        foto: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
      },
      {
        id: 4,
        nome: 'Pizza Calabresa',
        descricao: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
        preco: 42.9,
        foto: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400',
      },
    ],
  },
]

const Perfil = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === Number(id)) || restaurants[0]

  return (
    <S.PageWrapper>
      <Header />
      <S.HeroBanner>
        <S.HeroImage src={restaurant.image} alt={restaurant.title} />
        <S.HeroOverlay>
          <S.HeroContent>
            <S.RestaurantType>{restaurant.tipo}</S.RestaurantType>
            <S.RestaurantName>{restaurant.title}</S.RestaurantName>
          </S.HeroContent>
        </S.HeroOverlay>
      </S.HeroBanner>
      <S.Main>
        <S.Container>
          <S.MenuGrid>
            {restaurant.pratos.map((prato) => (
              <S.DishCard key={prato.id}>
                <S.DishImage src={prato.foto} alt={prato.nome} />
                <S.DishBody>
                  <S.DishName>{prato.nome}</S.DishName>
                  <S.DishDescription>{prato.descricao}</S.DishDescription>
                  <S.DishButton>Adicionar ao carrinho</S.DishButton>
                </S.DishBody>
              </S.DishCard>
            ))}
          </S.MenuGrid>
        </S.Container>
      </S.Main>
      <Footer />
    </S.PageWrapper>
  )
}

export default Perfil
