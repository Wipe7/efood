import { useCart } from '../../contexts/CartContext'
import * as S from './styles'

const Cart = () => {
  const { items, isOpen, closeCart, removeItem, total } = useCart()

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length === 0 ? (
          <S.EmptyMessage>O carrinho está vazio, adicione pelo menos um produto para continuar com seu pedido.</S.EmptyMessage>
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
                <S.RemoveButton onClick={() => removeItem(item.id)}>
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
