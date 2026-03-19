import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  border-radius: 8px;
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

export const DestaqueBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
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

  img {
    width: 21px;
    height: 21px;
  }
`

export const CardCategory = styled.p`
  font-size: 12px;
  color: ${colors.gray};
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.gray};
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
  border-radius: 4px;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d45f5f;
  }
`
