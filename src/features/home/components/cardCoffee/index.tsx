import { useState } from 'react'

import { useCartContext } from '@/features/cart/context/useCartContext'
import { CartButton } from '@/shared/components/CartButton'
import { Heading } from '@/shared/components/Heading'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { Card } from '@/shared/components/ui/card'
import type { ICoffee } from '@/shared/types/coffee'
import { formatPrice } from '@/shared/utils/formatPrice'

export function CardCoffee({ id, description, image, name, price, tags, coffeeLimit }: ICoffee) {
  const { handleSelectedCoffee } = useCartContext()
  const [countCoffee, setCountCoffee] = useState(1)
  const priceValue = formatPrice(price)

  return (
    <Card className="max-w-[256px] min-h-[270px] rounded-tl-[5px] rounded-br-[5px] rounded-tr-3xl rounded-bl-3xl border-0 flex flex-col items-center justify-center gap-0 px-3 py-0">
      <picture className="relative -top-4 flex items-center h-23 justify-center">
        <img src={image} alt={name} width={120} />
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
            <div className="flex items-center rounded-sm bg-base-button">
              <Button
                size="icon"
                className="text-secondary text-2xl bg-transparent hover:bg-transparent"
                disabled={countCoffee <= 1}
                onClick={() =>
                  setCountCoffee((prev) => {
                    if (prev > 1) {
                      return prev - 1
                    }

                    return 1
                  })
                }
              >
                -
              </Button>
              <span>{countCoffee}</span>
              <Button
                size="icon"
                className="text-secondary text-base bg-transparent hover:bg-transparent"
                disabled={coffeeLimit <= 1 || countCoffee === coffeeLimit}
                onClick={() =>
                  setCountCoffee((prev) => {
                    if (prev < coffeeLimit) {
                      return prev + 1
                    }

                    return coffeeLimit
                  })
                }
              >
                +
              </Button>
            </div>
            <CartButton
              color="purple"
              onClickCart={() =>
                handleSelectedCoffee({
                  id,
                  image,
                  name,
                  count: countCoffee
                })
              }
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
