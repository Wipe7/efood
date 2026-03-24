import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.salmon};
  position: relative;
  border: 1px solid ${colors.salmon};
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const BadgesRow = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const DestaqueBadge = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
`

export const CategoryBadge = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
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
  font-weight: bold;
  font-size: 18px;
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
  font-weight: bold;
  font-size: 18px;
  color: ${colors.gray};

  img {
    width: 21px;
    height: 21px;
  }
`

export const StarIcon = styled.span`
  font-size: 18px;
  color: #F9B912;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${colors.gray};
`

export const CardButton = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  border: 1px solid ${colors.salmon};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d45f5f;
  }
`
