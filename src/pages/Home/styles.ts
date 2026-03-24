import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.gray};
  margin-bottom: 40px;
`

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 24px;
  padding: 80px 0;
`
