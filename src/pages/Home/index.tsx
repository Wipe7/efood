import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import * as S from './styles'

const restaurants = [
  {
    id: 1,
    title: 'Pizza Hut',
    category: 'Italiana',
    description:
      'Fundada em 1958, a Pizza Hut é uma das maiores redes de pizzarias do mundo. Com uma história rica e saborosa, a marca é conhecida por suas pizzas de qualidade e ambiente familiar.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
    avaliacao: 4.9,
    destacado: true,
  },
  {
    id: 2,
    title: 'Big Burguer',
    category: 'Lanches',
    description:
      'Desde 1985, o Big Burguer traz os melhores hambúrgueres artesanais com ingredientes frescos e selecionados. Um clássico que nunca sai de moda.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
    avaliacao: 4.7,
    destacado: false,
  },
  {
    id: 3,
    title: 'Oriental Kitchen',
    category: 'Japonesa',
    description:
      'Autêntica culinária oriental trazida diretamente das tradições asiáticas. Sushis, temakis e pratos quentes preparados com maestria e ingredientes importados.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600',
    avaliacao: 4.8,
    destacado: true,
  },
  {
    id: 4,
    title: 'Casa do Churrasco',
    category: 'Brasileira',
    description:
      'O melhor churrasco brasileiro no conforto da sua casa. Carnes nobres selecionadas, marinadas no segredo da casa e preparadas na brasa com todo o cuidado.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600',
    avaliacao: 4.6,
    destacado: false,
  },
  {
    id: 5,
    title: 'Bella Pasta',
    category: 'Italiana',
    description:
      'Massas frescas artesanais com molhos tradicionais italianos. Cada prato é preparado com amor e dedicação, seguindo receitas centenárias da cozinha italiana.',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600',
    avaliacao: 4.5,
    destacado: false,
  },
  {
    id: 6,
    title: 'Sabor do Mar',
    category: 'Frutos do Mar',
    description:
      'Especialistas em frutos do mar frescos direto do oceano para a sua mesa. Camarões, ostras, lagosta e muito mais em preparações únicas e saborosas.',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600',
    avaliacao: 4.9,
    destacado: true,
  },
]

const Home = () => {
  return (
    <S.PageWrapper>
      <Header isHomePage />
      <S.Main>
        <S.Container>
          <S.SectionTitle>Restaurantes</S.SectionTitle>
          <S.RestaurantsGrid>
            {restaurants.map((r) => (
              <RestaurantCard key={r.id} {...r} />
            ))}
          </S.RestaurantsGrid>
        </S.Container>
      </S.Main>
      <Footer />
    </S.PageWrapper>
  )
}

export default Home
