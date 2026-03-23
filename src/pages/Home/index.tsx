import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurante } from '../../types'
import * as S from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        setRestaurants(data)
        setLoading(false)
      })
  }, [])

  return (
    <S.PageWrapper>
      <Header isHomePage />
      <S.Main>
        <S.Container>
          <S.SectionTitle>Restaurantes</S.SectionTitle>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <S.RestaurantsGrid>
              {restaurants.map((r) => (
                <RestaurantCard
                  key={r.id}
                  id={r.id}
                  title={r.titulo}
                  category={r.tipo}
                  description={r.descricao}
                  image={r.capa}
                  avaliacao={r.avaliacao}
                  destacado={r.destacado}
                />
              ))}
            </S.RestaurantsGrid>
          )}
        </S.Container>
      </S.Main>
      <Footer />
    </S.PageWrapper>
  )
}

export default Home
