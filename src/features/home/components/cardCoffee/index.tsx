import { useState } from 'react'

import { CountButton } from '@/features/cart/components/countButton'
import { useCartContext } from '@/features/cart/context/useCartContext'
import { CartButton } from '@/shared/components/CartButton'
import { Heading } from '@/shared/components/Heading'
import { Badge } from '@/shared/components/ui/badge'
import { Card } from '@/shared/components/ui/card'
import type { ICoffee } from '@/shared/types/coffee'
import { formatPrice } from '@/shared/utils/formatPrice'

export function CardCoffee({ id, description, image, name, price, tags, coffeeLimit }: ICoffee) {
  const { handleSelectedCoffee } = useCartContext()
  const [count, setCount] = useState(1)
  const priceValue = formatPrice(price)

  return (
    <Card className="max-w-[256px] min-h-[270px] rounded-tl-[5px] rounded-br-[5px] rounded-tr-3xl rounded-bl-3xl border-0 flex flex-col items-center justify-center gap-0 px-3 py-0">
      <picture className="relative -top-4 flex items-center h-23 justify-center">
        <img src={image} alt={name} width={100} />
      </picture>
      <div className="flex flex-col gap-2 items-center flex-1">
        <div className="flex items-center gap-1 justify-center">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-muted text-[10px]">
              {tag.toUpperCase()}
            </Badge>
          ))}
        </div>

        <Heading level="h5" as="h5" weight="bold" align="center" className="font-baloo text-gray-950 m-0">
          {name}
        </Heading>
        <p className="text-xs text-center text-gray-500">{description}</p>
        <div className="w-full flex items-center justify-between pt-4">
          <div>
            <span className="text-xs mr-1">{priceValue.currency}</span>
            <span className="font-baloo font-bold text-xl">{priceValue.price}</span>
          </div>

          <div className="flex items-center gap-1">
            <CountButton coffeeLimit={coffeeLimit} count={count} setCountCoffee={setCount} />
            <CartButton
              color="purple"
              onClickCart={() =>
                handleSelectedCoffee({
                  id,
                  image,
                  name,
                  price,
                  coffeeLimit,
                  count
                })
              }
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
