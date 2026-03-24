import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeroBanner = styled.div`
  position: relative;
  height: 280px;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 40px;
`

export const RestaurantType = styled.p`
  font-size: 16px;
  color: ${colors.white};
  margin-bottom: 8px;
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`

export const Main = styled.main`
  flex: 1;
  padding: 56px 0;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: center;
`

export const DishCard = styled.div`
  background-color: ${colors.salmon};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 338px;
`

export const DishImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
`

export const DishBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const DishName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 8px;
`

export const DishDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  line-height: 22px;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const DishButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  border: none;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 304px;
  margin: 0 auto;
  display: block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`
