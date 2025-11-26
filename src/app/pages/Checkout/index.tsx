import { ShoppingCart } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCartContext } from '@/features/cart/context/useCartContext'
import DeliveryForm, { type DeliveryFormRef } from '@/features/checkout/components/DeliveryForm'
import { OrdersCard } from '@/features/checkout/components/ordersCard'
import { Heading } from '@/shared/components/Heading'
import { Text } from '@/shared/components/Text'
import { Button } from '@/shared/components/ui/button'

export default function Checkout() {
  const navigate = useNavigate()
  const { hasProductsAtCart, handleClearCart } = useCartContext()
  const formRef = useRef<DeliveryFormRef>(null)

  const handleSubmitOrder = async() => {
    const formData = await formRef.current?.submit()

    if (formData) {
      handleClearCart()
      navigate('/success', { state: formData })
    }
  }

  return (
    <div className="container-center grid grid-cols-1 md:grid-cols-[2fr_1.4fr] gap-4">
      {hasProductsAtCart ? (
        <>
          <div>
            <Heading level="h5" as="h5" weight="bold" className="font-baloo">
              Complete seu pedido
            </Heading>

            <DeliveryForm ref={formRef} />
          </div>
          <div>
            <Heading level="h5" as="h5" weight="bold" className="font-baloo">
              Cafés selecionados
            </Heading>

            <OrdersCard onSubmit={handleSubmitOrder} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 col-span-full">
          <div className="flex flex-col items-center gap-4">
            <ShoppingCart className="size-24 text-secondary" />
            <Heading level="h3" as="h3" weight="bold" className="text-center">
              Seu carrinho está vazio
            </Heading>
            <Text size="base" align="center" className="max-w-md text-gray-500">
              Adicione alguns cafés deliciosos ao seu carrinho para continuar com o pedido
            </Text>
          </div>
          <Button variant="default" size="lg" onClick={() => navigate('/')}>
            Ver Cafés Disponíveis
          </Button>
        </div>
      )}
    </div>
  )
}
