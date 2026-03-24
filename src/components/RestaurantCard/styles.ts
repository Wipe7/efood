import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: #FFEBD9;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 338px;
`

export const CardImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
`

export const BadgesRow = styled.div`
  position: absolute;
  top: 16px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
`

export const DestaqueBadge = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
`

export const CategoryBadge = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
`

export const CardBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.gray};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.gray};
  }

  img {
    width: 14px;
    height: 14px;
  }
`

export const StarIcon = styled.span`
  font-size: 14px;
  color: #F9B912;
`

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray};
  line-height: 22px;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const CardButton = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.white};
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
    background-color: #d45f5f;
  }
`
