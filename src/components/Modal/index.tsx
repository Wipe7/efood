import { Prato } from '../../types'
import { useAppDispatch } from '../../store/hooks'
import { addItem } from '../../store/cartSlice'
import * as S from './styles'

type ModalProps = {
  prato: Prato
  onClose: () => void
}

const Modal = ({ prato, onClose }: ModalProps) => {
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    dispatch(addItem(prato))
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        <S.ModalImage src={prato.foto} alt={prato.nome} />
        <S.ModalContent>
          <S.ModalTitle>{prato.nome}</S.ModalTitle>
          <S.ModalDescription>{prato.descricao}</S.ModalDescription>
          {prato.porcao && <S.ModalPorcao>Serve: {prato.porcao}</S.ModalPorcao>}
          <S.ModalPrice>
            Valor: R$ {prato.preco.toFixed(2).replace('.', ',')}
          </S.ModalPrice>
          <S.AddButton onClick={handleAdd}>Adicionar ao carrinho</S.AddButton>
        </S.ModalContent>
      </S.ModalBox>
    </S.Overlay>
  )
}

export default Modal
