import { ShoppingCart } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

import { Button } from '../ui/button'
import type { CartButtonProps } from './types'

export function CartButton({ color, onClickCart, count }: CartButtonProps) {
  return (
    <div>
      <Button
        size="icon"
        className={cn({
          'bg-primary hover:bg-primary-foreground/80': color === 'yellow',
          'bg-secondary hover:bg-secondary-foreground/80': color === 'purple'
        })}
        onClick={onClickCart}
      >
        <ShoppingCart strokeWidth={3} />
      </Button>
      {!!count && (
        <span className="relative -top-[25px] right-[10px] bg-primary-foreground px-2 py-1 rounded-full text-white text-xs">
          {count}
        </span>
      )}
    </div>
  )
}
