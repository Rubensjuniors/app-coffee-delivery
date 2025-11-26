import { Trash } from 'lucide-react'

import { CountButton } from '@/features/cart/components/countButton'
import { useCartContext } from '@/features/cart/context/useCartContext'
import { Button } from '@/shared/components/ui/button'
import { Card } from '@/shared/components/ui/card'
import { formatPrice } from '@/shared/utils/formatPrice'

interface OrdersCardProps {
  onSubmit?: () => void
}

export function OrdersCard({ onSubmit }: OrdersCardProps) {
  const {
    selectedCoffee,
    handleIncreaseSelectedCoffee,
    handleDecreaseSelectedCoffee,
    handleRemoveSelectedCoffee,
    frete,
    totalOrders,
    total
  } = useCartContext()
  return (
    <Card className="rounded-tl-[5px] rounded-br-[5px] rounded-tr-3xl rounded-bl-3xl border-0 p-4 mt-4">
      <div className="overflow-y-auto max-h-[300px] no-scrollbar">
        {selectedCoffee.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b">
            <picture className="hidden sm:flex w-[90px] h-[90px] items-center justify-center">
              <img src={item.image} alt={item.name} width={120} />
            </picture>

            <div className="w-full grid grid-cols-[1fr_auto] grid-rows-2 items-center">
              <span className="col-start-1 row-start-1">{item.name}</span>

              <div>
                <span className="text-xs mr-1">{formatPrice(item.price).currency}</span>
                <span className="font-baloo font-bold text-xl">{formatPrice(item.price).price}</span>
              </div>

              <div className="col-start-1 row-start-2 flex items-center gap-2">
                <CountButton
                  count={item.count}
                  coffeeLimit={item.coffeeLimit}
                  onDecrease={() => handleDecreaseSelectedCoffee(item.id)}
                  onIncrease={() => handleIncreaseSelectedCoffee(item.id)}
                />
                <Button
                  className="text-gray-600 text-sm bg-transparent hover:bg-transparent"
                  onClick={() => handleRemoveSelectedCoffee(item.id)}
                >
                  <Trash className="text-secondary" /> REMOVER
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <span>Total de itens</span>
          <div>
            <span className="text-xs mr-1">{formatPrice(totalOrders).currency}</span>
            <span className="text-xl">{formatPrice(totalOrders).price}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span>Entrega</span>
          <div>
            <span className="text-xs mr-1">{formatPrice(frete).currency}</span>
            <span className="text-xl">{formatPrice(frete).price}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 text-black">
          <span className="font-bold text-2xl">Total</span>
          <div>
            <span className="text-xs mr-1">{formatPrice(total).currency}</span>
            <span className="font-bold text-xl">{formatPrice(total).price}</span>
          </div>
        </div>
        <Button variant="default" size="lg" className="w-full mt-4" onClick={onSubmit}>
          CONFIRMAR PEDIDO
        </Button>
      </div>
    </Card>
  )
}
