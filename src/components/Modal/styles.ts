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
  width: 1024px;
  max-width: 90%;
  height: 344px;
  display: flex;
  gap: 24px;
  padding: 32px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-image: url('/assets/close.png');
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
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
  width: 656px;
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const ModalDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 22px;
  flex: 1;
`

export const AddButton = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  width: 218px;
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  margin-top: auto;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
