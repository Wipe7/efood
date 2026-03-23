import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.salmon};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 32px 8px;
  overflow-y: auto;
`

export const EmptyMessage = styled.p`
  color: ${colors.white};
  font-size: 14px;
  text-align: center;
  margin-top: 32px;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${colors.white};
  padding: 8px;
  margin-bottom: 16px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  flex: 1;
`

export const ItemName = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.salmon};
  margin-bottom: 8px;
`

export const ItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.salmon};
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  color: ${colors.salmon};
  font-size: 12px;
  text-decoration: underline;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`

export const Separator = styled.hr`
  border-color: ${colors.white};
  margin: 16px 0;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`
