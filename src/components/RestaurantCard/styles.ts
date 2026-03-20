import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const BadgesRow = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
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
  margin-bottom: 16px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.gray};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.gray};
  }
`

export const StarIcon = styled.span`
  font-size: 18px;
  color: #F9B912;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.salmon};
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
`

export const CardButton = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.white};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d45f5f;
  }
`
