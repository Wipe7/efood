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
  {
    id: 2,
    title: 'Big Burguer',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200',
    avaliacao: 4.7,
    tipo: 'Hamburgueria',
    pratos: [
      {
        id: 1,
        nome: 'Classic Smash',
        descricao: 'Blend especial 180g, queijo cheddar, alface, tomate, picles e molho da casa.',
        preco: 35.9,
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
      },
      {
        id: 2,
        nome: 'Double Bacon',
        descricao: 'Dois blends 180g, bacon crocante, queijo americano e molho barbecue.',
        preco: 49.9,
        foto: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400',
      },
      {
        id: 3,
        nome: 'Veggie Burguer',
        descricao: 'Blend de grão-de-bico, queijo brie, rúcula e geleia de pimenta.',
        preco: 38.9,
        foto: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400',
      },
      {
        id: 4,
        nome: 'Chicken Crispy',
        descricao: 'Frango empanado crocante, queijo suíço, coleslaw e maionese temperada.',
        preco: 33.9,
        foto: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400',
      },
    ],
  },
  {
    id: 3,
    title: 'Oriental Kitchen',
    category: 'Japonesa',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200',
    avaliacao: 4.8,
    tipo: 'Culinária Japonesa',
    pratos: [
      {
        id: 1,
        nome: 'Combo Sushi 16 peças',
        descricao: 'Seleção de niguiri de salmão, atum e camarão com hossomaki de pepino.',
        preco: 69.9,
        foto: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400',
      },
      {
        id: 2,
        nome: 'Temaki Salmão',
        descricao: 'Cone de alga com arroz temperado, salmão fresco e cream cheese.',
        preco: 28.9,
        foto: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400',
      },
      {
        id: 3,
        nome: 'Yakissoba de Frango',
        descricao: 'Macarrão oriental salteado com frango, legumes e molho shoyu especial.',
        preco: 42.9,
        foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
      },
      {
        id: 4,
        nome: 'Gyoza (8 unidades)',
        descricao: 'Pastel japonês recheado com carne suína e vegetais, servido com molho ponzu.',
        preco: 32.9,
        foto: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400',
      },
    ],
  },
  {
    id: 4,
    title: 'Casa do Churrasco',
    category: 'Brasileira',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200',
    avaliacao: 4.6,
    tipo: 'Churrascaria',
    pratos: [
      {
        id: 1,
        nome: 'Picanha na Brasa',
        descricao: 'Picanha premium grelhada na brasa, servida com farofa, vinagrete e pão de alho.',
        preco: 89.9,
        foto: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400',
      },
      {
        id: 2,
        nome: 'Costela Bovina',
        descricao: 'Costela bovina assada lentamente por 12 horas com tempero artesanal.',
        preco: 79.9,
        foto: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400',
      },
      {
        id: 3,
        nome: 'Frango Caipira',
        descricao: 'Frango caipira inteiro temperado na vinha d\'alho e assado na churrasqueira.',
        preco: 59.9,
        foto: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
      },
      {
        id: 4,
        nome: 'Espetinho Misto',
        descricao: 'Espetinhos de carne, frango e linguiça com molho chimichurri da casa.',
        preco: 45.9,
        foto: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
      },
    ],
  },
  {
    id: 5,
    title: 'Bella Pasta',
    category: 'Italiana',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=1200',
    avaliacao: 4.5,
    tipo: 'Restaurante Italiano',
    pratos: [
      {
        id: 1,
        nome: 'Fettuccine Carbonara',
        descricao: 'Massa fresca com guanciale, ovos caipiras, pecorino romano e pimenta negra.',
        preco: 52.9,
        foto: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400',
      },
      {
        id: 2,
        nome: 'Penne all\'Arrabbiata',
        descricao: 'Penne com molho de tomate picante, alho, azeite e salsinha.',
        preco: 44.9,
        foto: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400',
      },
      {
        id: 3,
        nome: 'Lasanha Bolonhesa',
        descricao: 'Camadas de massa fresca com ragù de carne, molho béchamel e parmesão.',
        preco: 58.9,
        foto: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400',
      },
      {
        id: 4,
        nome: 'Risotto ai Funghi',
        descricao: 'Arroz arbório cremoso com mix de cogumelos, vinho branco e parmesão.',
        preco: 62.9,
        foto: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400',
      },
    ],
  },
  {
    id: 6,
    title: 'Sabor do Mar',
    category: 'Frutos do Mar',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200',
    avaliacao: 4.9,
    tipo: 'Frutos do Mar',
    pratos: [
      {
        id: 1,
        nome: 'Moqueca de Camarão',
        descricao: 'Camarões frescos no leite de coco, azeite de dendê, pimentões e coentro.',
        preco: 78.9,
        foto: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400',
      },
      {
        id: 2,
        nome: 'Caldeirada de Frutos do Mar',
        descricao: 'Caldo aromático com camarão, lula, mariscos e peixe do dia.',
        preco: 85.9,
        foto: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400',
      },
      {
        id: 3,
        nome: 'Salmão Grelhado',
        descricao: 'Filé de salmão grelhado com ervas finas, limão-siciliano e alcaparras.',
        preco: 72.9,
        foto: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
      },
      {
        id: 4,
        nome: 'Tainha Recheada',
        descricao: 'Tainha inteira recheada com farofa de camarão e ervas, assada no forno.',
        preco: 69.9,
        foto: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
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
