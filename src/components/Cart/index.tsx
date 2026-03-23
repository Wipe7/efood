import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { removeItem, closeCart } from '../../store/cartSlice'
import * as S from './styles'

const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector((state) => state.cart)
  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0)

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={() => dispatch(closeCart())} />
      <S.Sidebar>
        {items.length === 0 ? (
          <S.EmptyMessage>
            O carrinho está vazio, adicione pelo menos um produto para continuar com seu pedido.
          </S.EmptyMessage>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <S.ItemImage src={item.foto} alt={item.nome} />
                <S.ItemInfo>
                  <S.ItemName>{item.nome}</S.ItemName>
                  <S.ItemPrice>
                    {item.quantidade}x — R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                  </S.ItemPrice>
                </S.ItemInfo>
                <S.RemoveButton onClick={() => dispatch(removeItem(item.id))}>
                  Remover
                </S.RemoveButton>
              </S.CartItem>
            ))}
            <S.Separator />
            <S.TotalRow>
              <span>Valor total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </S.TotalRow>
            <S.CheckoutButton>Continuar com a entrega</S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </>
  )
}

export default Cart
