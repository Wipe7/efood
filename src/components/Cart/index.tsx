import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { removeItem, closeCart, setStep, setOrderResponse, clearCart } from '../../store/cartSlice'
import * as S from './styles'

const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen, step, orderResponse } = useAppSelector((state) => state.cart)
  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0)

  const [delivery, setDelivery] = useState({
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
  })

  const [payment, setPayment] = useState({
    name: '',
    number: '',
    code: '',
    expiresMonth: '',
    expiresYear: '',
  })

  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const body = {
        products: items.map((i) => ({ id: i.id, price: i.preco })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.description,
            city: delivery.city,
            zipCode: delivery.zipCode,
            number: Number(delivery.number),
            complement: delivery.complement,
          },
        },
        payment: {
          card: {
            name: payment.name,
            number: payment.number,
            code: Number(payment.code),
            expires: {
              month: Number(payment.expiresMonth),
              year: Number(payment.expiresYear),
            },
          },
        },
      }

      const res = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()
      dispatch(clearCart())
      dispatch(setOrderResponse({ orderId: data.orderId || data.id || '---', message: data.message || 'Pedido realizado com sucesso!' }))
    } catch {
      alert('Erro ao realizar pedido. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={() => { if (step !== 'confirmation') dispatch(closeCart()) }} />
      <S.Sidebar>

        {/* STEP 1 — CARRINHO */}
        {step === 'cart' && (
          <>
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
                    <S.RemoveButton onClick={() => dispatch(removeItem(item.id))} title="Remover" />
                  </S.CartItem>
                ))}
                <S.Separator />
                <S.TotalRow>
                  <span>Valor total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </S.TotalRow>
                <S.CheckoutButton onClick={() => dispatch(setStep('delivery'))}>
                  Continuar com a entrega
                </S.CheckoutButton>
              </>
            )}
          </>
        )}

        {/* STEP 2 — ENTREGA */}
        {step === 'delivery' && (
          <>
            <S.FormTitle>Entrega</S.FormTitle>
            <S.FormGroup>
              <S.Label>Quem irá receber</S.Label>
              <S.Input
                value={delivery.receiver}
                onChange={(e) => setDelivery({ ...delivery, receiver: e.target.value })}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Endereço</S.Label>
              <S.Input
                value={delivery.description}
                onChange={(e) => setDelivery({ ...delivery, description: e.target.value })}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Cidade</S.Label>
              <S.Input
                value={delivery.city}
                onChange={(e) => setDelivery({ ...delivery, city: e.target.value })}
              />
            </S.FormGroup>
            <S.FormRow>
              <S.FormGroup>
                <S.Label>CEP</S.Label>
                <S.Input
                  value={delivery.zipCode}
                  onChange={(e) => setDelivery({ ...delivery, zipCode: e.target.value })}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>Número</S.Label>
                <S.InputSmall
                  value={delivery.number}
                  onChange={(e) => setDelivery({ ...delivery, number: e.target.value })}
                />
              </S.FormGroup>
            </S.FormRow>
            <S.FormGroup>
              <S.Label>Complemento (opcional)</S.Label>
              <S.Input
                value={delivery.complement}
                onChange={(e) => setDelivery({ ...delivery, complement: e.target.value })}
              />
            </S.FormGroup>
            <S.CheckoutButton onClick={() => dispatch(setStep('payment'))}>
              Continuar com o pagamento
            </S.CheckoutButton>
            <S.BackButton onClick={() => dispatch(setStep('cart'))}>
              Voltar para o carrinho
            </S.BackButton>
          </>
        )}

        {/* STEP 3 — PAGAMENTO */}
        {step === 'payment' && (
          <>
            <S.FormTitle>Pagamento — Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</S.FormTitle>
            <S.FormGroup>
              <S.Label>Nome no cartão</S.Label>
              <S.Input
                value={payment.name}
                onChange={(e) => setPayment({ ...payment, name: e.target.value })}
              />
            </S.FormGroup>
            <S.FormRow>
              <S.FormGroup style={{ flex: 2 }}>
                <S.Label>Número do cartão</S.Label>
                <S.Input
                  value={payment.number}
                  onChange={(e) => setPayment({ ...payment, number: e.target.value })}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>CVV</S.Label>
                <S.InputSmall
                  value={payment.code}
                  onChange={(e) => setPayment({ ...payment, code: e.target.value })}
                />
              </S.FormGroup>
            </S.FormRow>
            <S.FormRow>
              <S.FormGroup>
                <S.Label>Mês de vencimento</S.Label>
                <S.Input
                  value={payment.expiresMonth}
                  onChange={(e) => setPayment({ ...payment, expiresMonth: e.target.value })}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>Ano de vencimento</S.Label>
                <S.Input
                  value={payment.expiresYear}
                  onChange={(e) => setPayment({ ...payment, expiresYear: e.target.value })}
                />
              </S.FormGroup>
            </S.FormRow>
            <S.CheckoutButton onClick={handleCheckout} disabled={loading}>
              {loading ? 'Finalizando...' : 'Finalizar pagamento'}
            </S.CheckoutButton>
            <S.BackButton onClick={() => dispatch(setStep('delivery'))}>
              Voltar para a edição do endereço
            </S.BackButton>
          </>
        )}

        {/* STEP 4 — CONFIRMAÇÃO */}
        {step === 'confirmation' && orderResponse && (
          <>
            <S.FormTitle>Pedido realizado — {orderResponse.orderId}</S.FormTitle>
            <S.ConfirmationText>
              {orderResponse.message}
            </S.ConfirmationText>
            <S.ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não são autorizados a realizar cobranças extras.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.ConfirmationText>
            <S.CheckoutButton onClick={() => dispatch(closeCart())}>
              Concluir
            </S.CheckoutButton>
          </>
        )}

      </S.Sidebar>
    </>
  )
}

export default Cart
