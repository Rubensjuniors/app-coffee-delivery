import type { Dispatch, SetStateAction } from 'react'

import { Button } from '@/shared/components/ui/button'

type CountButtonProps =
  | {
      count: number
      coffeeLimit: number
      setCountCoffee: Dispatch<SetStateAction<number>>
      onDecrease?: never
      onIncrease?: never
    }
  | {
      count: number
      coffeeLimit: number
      setCountCoffee?: never
      onDecrease: () => void
      onIncrease: () => void
    }

export function CountButton(props: CountButtonProps) {
  const { count, coffeeLimit } = props

  const handleDecrease = () => {
    if ('setCountCoffee' in props && props.setCountCoffee) {
      props.setCountCoffee((prev) => {
        if (prev > 1) {
          return prev - 1
        }

        return 1
      })
    } else if ('onDecrease' in props && props.onDecrease) {
      props.onDecrease()
    }
  }

  const handleIncrease = () => {
    if ('setCountCoffee' in props && props.setCountCoffee) {
      props.setCountCoffee((prev) => {
        if (prev < coffeeLimit) {
          return prev + 1
        }

        return coffeeLimit
      })
    } else if ('onIncrease' in props && props.onIncrease) {
      props.onIncrease()
    }
  }

  return (
    <div className="flex items-center rounded-sm bg-base-button">
      <Button
        size="icon"
        className="text-secondary text-2xl bg-transparent hover:bg-transparent"
        disabled={count <= 1}
        onClick={handleDecrease}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        size="icon"
        className="text-secondary text-base bg-transparent hover:bg-transparent"
        disabled={coffeeLimit <= 1 || count === coffeeLimit}
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  )
}
