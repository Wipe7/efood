import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalBox = styled.div`
  background-color: ${colors.salmon};
  max-width: 1024px;
  width: 90%;
  display: flex;
  gap: 24px;
  padding: 32px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${colors.white};
  line-height: 1;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  color: ${colors.white};
  line-height: 1.6;
  margin-bottom: 16px;
`

export const ModalPorcao = styled.p`
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
`

export const ModalPrice = styled.p`
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
`

export const AddButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  margin-top: auto;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`
