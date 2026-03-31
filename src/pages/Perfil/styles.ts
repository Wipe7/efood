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
  padding: 0 40px;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0;
`

export const DishCard = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.cream};
`

export const DishImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  display: block;
  margin: 0 auto 8px;
`

export const DishBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const DishName = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.cream};
  margin-bottom: 8px;
`

export const DishDescription = styled.p`
  font-size: 14px;
  color: ${colors.cream};
  line-height: 22px;
  flex: 1;
  margin-bottom: 8px;
`

export const DishButton = styled.button`
  background-color: ${colors.cream};
  color: #E66767;
  border: none;
  width: 218px;
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  align-self: flex-start;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
