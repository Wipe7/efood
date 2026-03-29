import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import { Restaurante, Prato } from '../../types'
import * as S from './styles'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurante | null>(null)
  const [selectedPrato, setSelectedPrato] = useState<Prato | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurante) => setRestaurant(data))
  }, [id])

  if (!restaurant) return <p style={{ padding: '40px', textAlign: 'center' }}>Carregando...</p>

  return (
    <S.PageWrapper>
      <Header />
      <S.HeroBanner>
        <S.HeroImage src={restaurant.capa} alt={restaurant.titulo} />
        <S.HeroOverlay>
          <S.HeroContent>
            <S.RestaurantType>{restaurant.tipo}</S.RestaurantType>
            <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
          </S.HeroContent>
        </S.HeroOverlay>
      </S.HeroBanner>
      <S.Main>
        <S.Container>
          <S.MenuGrid>
            {restaurant.cardapio.map((prato) => (
              <S.DishCard key={prato.id}>
                <S.DishImage src={prato.foto} alt={prato.nome} />
                <S.DishBody>
                  <S.DishName>{prato.nome}</S.DishName>
                  <S.DishDescription>{prato.descricao}</S.DishDescription>
                  <S.DishButton onClick={() => setSelectedPrato(prato)}>
                    Adicionar ao carrinho | R$ {prato.preco.toFixed(2).replace('.', ',')}
                  </S.DishButton>
                </S.DishBody>
              </S.DishCard>
            ))}
          </S.MenuGrid>
        </S.Container>
      </S.Main>
      <Footer />
      {selectedPrato && (
        <Modal prato={selectedPrato} onClose={() => setSelectedPrato(null)} />
      )}
    </S.PageWrapper>
  )
}

export default Perfil
